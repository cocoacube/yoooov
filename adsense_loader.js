(function () {
  function lockCompactHeight(element) {
    if (!element || element.dataset.heightLocked === "true") return;
    element.dataset.heightLocked = "true";
    const enforce = () => {
      if (element.style.getPropertyValue("height") !== "112px") {
        element.style.setProperty("height", "112px", "important");
      }
      if (element.style.getPropertyValue("min-height") !== "112px") {
        element.style.setProperty("min-height", "112px", "important");
      }
      if (element.style.getPropertyValue("max-height") !== "112px") {
        element.style.setProperty("max-height", "112px", "important");
      }
      element.style.setProperty("overflow", "hidden", "important");
    };
    enforce();
    new MutationObserver(enforce).observe(element, {
      attributes: true,
      attributeFilter: ["style"]
    });
  }

  function init() {
    const config = window.YOOOOV_ADSENSE || {};
    const client = String(config.client || "").trim();
    if (!/^ca-pub-\d{16}$/i.test(client)) return;

    const units = Array.from(document.querySelectorAll(".yoooov-ad-unit")).filter((unit) => {
      if (unit.dataset.adInitialized === "true") return false;
      const key = unit.dataset.slotKey;
      const slot = String(config.slots?.[key] || "").trim();
      if (!/^\d+$/.test(slot)) return false;
      const format = String(config.formats?.[key] || "auto");
      if (!unit.parentElement?.classList.contains("yoooov-ad-inner")) {
        const inner = document.createElement("div");
        inner.className = "yoooov-ad-inner";
        unit.parentNode.insertBefore(inner, unit);
        inner.appendChild(unit);
      }
      unit.classList.add("adsbygoogle");
      unit.style.display = "block";
      unit.dataset.adClient = client;
      unit.dataset.adSlot = slot;
      unit.dataset.adFormat = format;
      unit.dataset.adInitialized = "true";
      if (format !== "autorelaxed") unit.dataset.fullWidthResponsive = "true";
      const container = unit.closest(".yoooov-ad");
      const syncFillState = () => {
        container?.classList.toggle("ad-loaded", unit.dataset.adStatus === "filled");
      };
      syncFillState();
      new MutationObserver(syncFillState).observe(unit, {
        attributes: true,
        attributeFilter: ["data-ad-status"]
      });
      lockCompactHeight(unit.closest(".yoooov-ad"));
      return true;
    });

    if (!units.length) return;
    const startUnits = () => {
      units.forEach(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (_) {}
      });
    };

    if (document.querySelector('script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      startUnits();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
    script.addEventListener("load", startUnits, { once: true });
    document.head.appendChild(script);
  }

  window.YoooovAds = { init };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
