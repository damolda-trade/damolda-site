var D = window.DAMOLDA_DATA;
var params = new URLSearchParams(location.search);
var lang = params.get("lang") || localStorage.getItem("damolda_lang") || "ko";

if (!["ko", "en"].includes(lang)) {
  lang = "ko";
}

localStorage.setItem("damolda_lang", lang);

var t = window.DAMOLDA_I18N;
var THEME_PHRASES = window.DAMOLDA_THEME_PHRASES;
