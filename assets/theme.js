/* Theme + accent + burger nav behavior. */
(function () {
  const root = document.documentElement;

  function setTheme(next) {
    const mode = next ? "dark" : "light";
    root.setAttribute("data-theme", mode === "dark" ? "dark" : "light");
    try {
      localStorage.setItem("theme", mode);
    } catch {}
    const toggle = document.getElementById("modeToggle");
    if (toggle) toggle.checked = next;

    window.dispatchEvent(
      new CustomEvent("app:themechange", {
        detail: { theme: mode },
      })
    );
  }

  function setAccent(color) {
    if (!color) return;
    root.style.setProperty("--accent", color);
    try {
      localStorage.setItem("accent", color);
    } catch {}

    const accentPicker = document.getElementById("accentPicker");
    if (accentPicker && accentPicker.value !== color) accentPicker.value = color;

    document.querySelectorAll(".swatches button[data-color]").forEach((btn) => {
      const c = btn.getAttribute("data-color");
      btn.setAttribute("aria-pressed", c === color ? "true" : "false");
    });

    window.dispatchEvent(
      new CustomEvent("app:accentchange", {
        detail: { accent: color },
      })
    );
  }

  function initBurger() {
    const burger = document.querySelector(".burger");
    const nav = document.getElementById("siteNav");
    if (!burger || !nav) return;

    function sync(open) {
      nav.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    }

    // Ensure initial state is consistent (useful after refresh).
    sync(false);

    burger.addEventListener("click", () => {
      const open = nav.classList.contains("open");
      sync(!open);
    });

    // Close nav when a link is clicked (mobile UX).
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => sync(false));
    });

    // Close nav on outside click (mobile UX).
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const clickedInside = nav.contains(target) || burger.contains(target);
      if (!clickedInside && nav.classList.contains("open")) sync(false);
    });

    // Close on ESC.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) sync(false);
    });
  }

  function init() {
    initBurger();

    // Theme init.
    const savedTheme = (() => {
      try {
        return localStorage.getItem("theme");
      } catch {
        return null;
      }
    })();
    const isDark = savedTheme === "dark";
    setTheme(isDark);

    const toggle = document.getElementById("modeToggle");
    if (toggle) {
      toggle.addEventListener("change", () => setTheme(toggle.checked));

      // Make the slider itself togglable (for users who click the switch area).
      const slider = document.querySelector("#modeToggle + .slider");
      if (slider) {
        slider.style.cursor = "pointer";
        slider.addEventListener("click", (e) => {
          e.preventDefault();
          toggle.checked = !toggle.checked;
          toggle.dispatchEvent(new Event("change", { bubbles: true }));
        });
      }
    }

    // Accent init.
    const savedAccent = (() => {
      try {
        return localStorage.getItem("accent");
      } catch {
        return null;
      }
    })();
    const accentPicker = document.getElementById("accentPicker");
    const initialAccent = savedAccent || (accentPicker ? accentPicker.value : "#6d5efc");
    setAccent(initialAccent);

    if (accentPicker) {
      accentPicker.addEventListener("input", () => setAccent(accentPicker.value));
    }

    document.querySelectorAll(".swatches button[data-color]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const color = btn.getAttribute("data-color");
        setAccent(color);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

