(function () {
  let lang = localStorage.getItem("lang") || "zh";

  async function loadTranslations(lang) {
    const res = await fetch(`/locales/${lang}.json`);
    return res.json();
  }

  async function updateLang() {
    const t = await loadTranslations(lang);

    // 遍历页面所有 [data-i18n="xxx"] 元素，替换文本
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.innerText = t[key];
    });

    // 更新按钮
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.innerText = lang === "zh" ? "中文" : "EN";

    // 存储 & <html lang="">
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }

  document.addEventListener("click", e => {
    if (e.target.id === "lang-toggle") {
      lang = lang === "zh" ? "en" : "zh";
      updateLang();
    }
  });

  updateLang();
})();
