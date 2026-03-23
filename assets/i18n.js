/* Simple i18n helper for Arabic/English. */
(function () {
  const STORAGE_KEY = "lang";
  const root = document.documentElement;
  const pageTitleKey = root.getAttribute("data-page-title-key");

  const DICT = {
    ar: {
      homeTitle: "معرض الهدايا - الرئيسية",
      brandTitle: "معرض الهدايا",
      menuButton: "قائمة",
      navHome: "الرئيسية",
      navOccasions: "المناسبات",
      navCategories: "الفئات",
      navAbout: "عن الموقع",

      modeNightLabel: "الوضع الليلي",
      languageLabel: "اللغة",
      accentLabel: "لون",
      quickColorsAria: "ألوان سريعة",

      heroHomeHeading: "اختار هديتك بسهولة حسب المناسبة",
      heroHomeSub: "تصفح هدايا مميزة بسهولة مع الوضع الليلي/النهاري وتخصيص اللون.",
      panelFilterGifts: "فلترة الهدايا",
      occasionLabel: "المناسبة",

      suggestedTitle: "الهدايا المقترحة",
      giftsTitle: "الهدايا",
      footerCopy: "© 2026 معرض الهدايا",
      footerHintHome: "جرّب اختيار لونك والوضع الليلي",

      occasionsTitle: "كل المناسبات",
      occasionsSub: "اختر المناسبة وسيتم عرض الهدايا المناسبة.",
      occasionsShowGifts: "عرض الهدايا",

      categoriesTitle: "الفئات",
      categoriesSub: "استكشف الهدايا حسب الفئة.",
      aboutTitle: "عن الموقع",
      aboutText:
        "نهدف لتسهيل اختيار الهدية المناسبة حسب المناسبة والفئة، مع واجهة عربية/إنجليزية ووضع ليلي وتخصيص لونك المفضل.",
      aboutCTA: "ابدأ التصفح الآن",

      giftBuy: "شراء عبر واتساب",
      accentChosen: "اللون المميز",
      themeChosen: "الوضع",
      lightMode: "نهاري",
      darkMode: "ليلي",
    },
    en: {
      homeTitle: "Gift Gallery - Home",
      brandTitle: "Gift Gallery",
      menuButton: "Menu",
      navHome: "Home",
      navOccasions: "Occasions",
      navCategories: "Categories",
      navAbout: "About",

      modeNightLabel: "Night mode",
      languageLabel: "Language",
      accentLabel: "Color",
      quickColorsAria: "Quick colors",

      heroHomeHeading: "Pick your gift easily by occasion",
      heroHomeSub: "Browse unique gifts easily with Light/Dark mode and accent color customization.",
      panelFilterGifts: "Filter gifts",
      occasionLabel: "Occasion",

      suggestedTitle: "Suggested gifts",
      giftsTitle: "Gifts",
      footerCopy: "© 2026 Gift Gallery",
      footerHintHome: "Try your color and night mode",

      occasionsTitle: "All occasions",
      occasionsSub: "Pick an occasion to see matching gifts.",
      occasionsShowGifts: "Show gifts",

      categoriesTitle: "Categories",
      categoriesSub: "Browse gifts by category.",
      aboutTitle: "About",
      aboutText:
        "We aim to make it easy to choose the right gift by occasion and category, with Arabic/English UI, night mode, and your preferred accent color.",
      aboutCTA: "Start browsing now",

      giftBuy: "Buy via WhatsApp",
      accentChosen: "Accent color",
      themeChosen: "Theme",
      lightMode: "Light mode",
      darkMode: "Night mode",
    },
  };

  function t(lang, key) {
    return DICT[lang] && DICT[lang][key] ? DICT[lang][key] : key;
  }

  // Expose translator for other scripts (gifts/theme/etc).
  window.__appT = function (key, lang) {
    const useLang = lang || (root.getAttribute("lang") || "ar");
    return t(useLang, key);
  };

  function applyI18n(lang) {
    const dict = DICT[lang] ? lang : "ar";

    // Direction and language.
    root.setAttribute("lang", dict);
    root.setAttribute("dir", dict === "ar" ? "rtl" : "ltr");

    // Page title.
    if (pageTitleKey) {
      document.title = t(dict, pageTitleKey);
    }

    // Text content.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(dict, key);
    });

    // ARIA labels.
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      el.setAttribute("aria-label", t(dict, key));
    });

    // Notify other scripts that language changed (for dynamic content).
    window.dispatchEvent(
      new CustomEvent("app:langchange", {
        detail: { lang: dict },
      })
    );
  }

  function init() {
    const langSelect = document.getElementById("langSelect");
    const saved = localStorage.getItem(STORAGE_KEY);

    const lang = saved || (langSelect ? langSelect.value : "ar");
    if (langSelect) langSelect.value = lang === "en" ? "en" : "ar";
    applyI18n(lang === "en" ? "en" : "ar");

    if (langSelect) {
      langSelect.addEventListener("change", () => {
        const next = langSelect.value === "en" ? "en" : "ar";
        localStorage.setItem(STORAGE_KEY, next);
        applyI18n(next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

