/* Render UI: gifts + occasions + categories + WhatsApp buy links. */
(function () {
  const data = window.appData || { gifts: [], occasions: [], categories: [] };
  const t = (window.__appT && window.__appT.bind(window)) || function (key) { return key; };

  function lang() {
    const l = (document.documentElement.getAttribute("lang") || "ar").toLowerCase();
    return l === "en" ? "en" : "ar";
  }

  function getAccent() {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#6d5efc";
    return v.trim();
  }

  function getThemeLabel(lng) {
    const mode = (document.documentElement.getAttribute("data-theme") || "light") === "dark" ? "dark" : "light";
    if (lng === "en") return mode === "dark" ? t("darkMode", "en") : t("lightMode", "en");
    return mode === "dark" ? t("darkMode", "ar") : t("lightMode", "ar");
  }

  function findOccasion(occasionId) {
    return data.occasions.find((o) => o.id === occasionId);
  }

  function findCategory(categoryId) {
    return data.categories.find((c) => c.id === categoryId);
  }

  function escapeText(s) {
    return String(s).replace(/[&<>"']/g, (ch) => {
      const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
      return map[ch] || ch;
    });
  }

  function buildWhatsAppHref({ gift }) {
    const lng = lang();
    const phone = data.whatsAppNumber || "0000000000";
    const occasion = findOccasion(gift.occasionId);
    const category = findCategory(gift.categoryId);

    const accent = getAccent();
    const themeLabel = getThemeLabel(lng);

    const occasionName = occasion ? occasion.name[lng] : "";
    const categoryName = category ? category.name[lng] : "";

    const giftName = gift.name[lng] || gift.name.ar || gift.name.en || "";
    const desc = gift.description ? (gift.description[lng] || gift.description.ar || "") : "";
    const details = gift.details ? (gift.details[lng] || gift.details.ar || "") : "";

    // Message should include all relevant fields.
    let message = "";
    if (lng === "en") {
      message =
        `Hello! I want to buy: ${giftName}\n` +
        `Occasion: ${occasionName}\n` +
        `Category: ${categoryName}\n` +
        `Price: ${gift.price}\n` +
        `Description: ${desc}\n` +
        `Details: ${details}\n` +
        `Name: \n` +
        `Country: \n` +
        `Please provide the price for this item.`;
    } else {
      message =
        `مرحباً! أريد شراء: ${giftName}\n` +
        `المناسبة: ${occasionName}\n` +
        `الفئة: ${categoryName}\n` +
        `السعر: ${gift.price}\n` +
        `الوصف: ${desc}\n` +
        `التفاصيل: ${details}\n` +
        `الاسم: \n` +
        `البلد: \n` +
        `من فضلك أرسل السعر لهذا المنتج.`;
    }

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  function createEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  const state = {
    occasionId: "all",
    categoryId: "all",
  };

  function initOccasionSelect() {
    const select = document.getElementById("occasionSelect");
    if (!select || !data.occasions?.length) return;

    // Ensure all options exist (and update their labels per language).
    const existingValues = new Set(Array.from(select.options || []).map((o) => o.value));
    const allNeeded = ["all", ...data.occasions.map((o) => o.id)];
    const missing = allNeeded.some((v) => !existingValues.has(v));
    if (missing) {
      select.innerHTML = "";
      allNeeded.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        select.appendChild(opt);
      });
    }

    const lng = lang();
    const allOption = Array.from(select.options).find((o) => o.value === "all");
    if (allOption) allOption.textContent = lng === "en" ? "All occasions" : "كل المناسبات";

    data.occasions.forEach((o) => {
      const opt = Array.from(select.options).find((s) => s.value === o.id);
      if (opt) opt.textContent = o.name[lng] || o.name.ar;
    });

    // Keep current selection if valid.
    if (select.value && select.value !== "all") {
      const exists = data.occasions.some((o) => o.id === select.value);
      state.occasionId = exists ? select.value : "all";
    }

    if (select.dataset.boundOccasion !== "1") {
      select.dataset.boundOccasion = "1";
      select.addEventListener("change", () => {
        state.occasionId = select.value || "all";
        renderGifts();
      });
    }
  }

  function initCategorySelect() {
    const select = document.getElementById("categorySelect");
    if (!select || !data.categories?.length) return;

    // Ensure all options exist (and update their labels per language).
    const existingValues = new Set(Array.from(select.options || []).map((o) => o.value));
    const allNeeded = ["all", ...data.categories.map((c) => c.id)];
    const missing = allNeeded.some((v) => !existingValues.has(v));
    if (missing) {
      select.innerHTML = "";
      allNeeded.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        select.appendChild(opt);
      });
    }

    const lng = lang();
    const allOption = Array.from(select.options).find((o) => o.value === "all");
    if (allOption) allOption.textContent = lng === "en" ? "All categories" : "كل الفئات";

    data.categories.forEach((c) => {
      const opt = Array.from(select.options).find((s) => s.value === c.id);
      if (opt) opt.textContent = c.name[lng] || c.name.ar;
    });

    if (select.value && select.value !== "all") {
      const exists = data.categories.some((c) => c.id === select.value);
      state.categoryId = exists ? select.value : "all";
    }

    if (select.dataset.boundCategory !== "1") {
      select.dataset.boundCategory = "1";
      select.addEventListener("change", () => {
        state.categoryId = select.value || "all";
        renderGifts();
      });
    }
  }

  function currentGiftsFiltered() {
    return (data.gifts || []).filter((gift) => {
      const okOcc = state.occasionId === "all" || gift.occasionId === state.occasionId;
      const okCat = state.categoryId === "all" || gift.categoryId === state.categoryId;
      return okOcc && okCat;
    });
  }

  function renderGifts() {
    const grid = document.getElementById("giftsGrid");
    if (!grid) return;

    const gifts = currentGiftsFiltered();
    grid.innerHTML = "";

    // If no gifts, show a small message.
    if (!gifts.length) {
      const empty = createEl("div", "panel", lang() === "en" ? "No gifts found." : "لا توجد هدايا.");
      grid.appendChild(empty);
      return;
    }

    gifts.forEach((gift) => {
      const occasion = findOccasion(gift.occasionId);
      const category = findCategory(gift.categoryId);

      const lng = lang();
      const title = gift.name?.[lng] || gift.name?.ar || gift.name?.en || "";
      const desc = gift.description?.[lng] || gift.description?.ar || gift.description?.en || "";
      const occasionName = occasion?.name?.[lng] || "";
      const categoryName = category?.name?.[lng] || "";

      const card = document.createElement("div");
      card.className = "gift-card";

      // Thumbnail.
      const thumb = document.createElement("div");
      thumb.className = "gift-thumb";
      thumb.style.background =
        `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.65) 0%, transparent 48%),` +
        `linear-gradient(145deg, color-mix(in oklab, ${gift.color || "#6d5efc"} 40%, #ffffff) 0%, ${gift.color || "#6d5efc"} 70%)`;
      card.appendChild(thumb);

      const body = document.createElement("div");
      body.className = "gift-body";

      const h3 = document.createElement("h3");
      h3.className = "gift-title";
      h3.textContent = title;

      const meta = document.createElement("div");
      meta.className = "gift-meta";

      if (occasionName) meta.appendChild(createEl("span", "pill", occasionName));
      if (categoryName) meta.appendChild(createEl("span", "pill", categoryName));

      const p = document.createElement("p");
      p.className = "gift-desc";
      p.textContent = desc;

      const actions = document.createElement("div");
      actions.className = "gift-actions";

      const price = document.createElement("div");
      price.className = "price";
      price.textContent = `${gift.price}`;

      const buy = document.createElement("a");
      buy.className = "buy-btn";
      buy.target = "_blank";
      buy.rel = "noopener noreferrer";
      buy.href = buildWhatsAppHref({ gift });
      buy.textContent = t("giftBuy", lng);

      actions.appendChild(price);
      actions.appendChild(buy);

      body.appendChild(h3);
      body.appendChild(meta);
      body.appendChild(p);
      body.appendChild(actions);

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function renderOccasions() {
    const grid = document.getElementById("occasionsGrid");
    if (!grid) return;
    if (!data.occasions?.length) return;

    const lng = lang();
    grid.innerHTML = "";

    data.occasions.forEach((o) => {
      const card = document.createElement("div");
      card.className = "occasion-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      const title = document.createElement("div");
      title.className = "card-title";
      title.textContent = o.name[lng] || o.name.ar;

      const sub = document.createElement("div");
      sub.className = "card-sub";
      sub.textContent = lang() === "en" ? "View gifts for this occasion" : "شاهد هدايا هذه المناسبة";

      card.appendChild(title);
      card.appendChild(sub);

      function applyOccasion() {
        state.occasionId = o.id;
        const select = document.getElementById("occasionSelect");
        if (select) {
          select.value = o.id;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          // If select doesn't exist, still filter gifts grid directly.
          renderGifts();
        }
      }

      // Clicking card applies filter.
      card.addEventListener("click", applyOccasion);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          applyOccasion();
        }
      });

      grid.appendChild(card);
    });
  }

  function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    if (!grid) return;
    if (!data.categories?.length) return;

    const lng = lang();
    grid.innerHTML = "";

    data.categories.forEach((c) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      const title = document.createElement("div");
      title.className = "card-title";
      title.textContent = c.name[lng] || c.name.ar;

      const sub = document.createElement("div");
      sub.className = "card-sub";
      sub.textContent = lang() === "en" ? "View gifts for this category" : "شاهد هدايا هذه الفئة";

      card.appendChild(title);
      card.appendChild(sub);

      function applyCategory() {
        state.categoryId = c.id;
        const select = document.getElementById("categorySelect");
        if (select) {
          select.value = c.id;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          renderGifts();
        }
      }

      card.addEventListener("click", applyCategory);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          applyCategory();
        }
      });

      grid.appendChild(card);
    });
  }

  function initFromExistingFilters() {
    const occSel = document.getElementById("occasionSelect");
    if (occSel && occSel.value) state.occasionId = occSel.value;
    const catSel = document.getElementById("categorySelect");
    if (catSel && catSel.value) state.categoryId = catSel.value;
  }

  function init() {
    initFromExistingFilters();
    initOccasionSelect();
    initCategorySelect();

    renderOccasions();
    renderCategories();
    renderGifts();

    // Dynamic content updates:
    // - language changes need re-render to update labels in created elements
    // - theme/accent changes need re-render because WhatsApp message includes them
    window.addEventListener("app:langchange", () => {
      initFromExistingFilters();
      initOccasionSelect();
      initCategorySelect();
      renderOccasions();
      renderCategories();
      renderGifts();
    });

    window.addEventListener("app:themechange", () => {
      renderGifts();
    });

    window.addEventListener("app:accentchange", () => {
      renderGifts();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

