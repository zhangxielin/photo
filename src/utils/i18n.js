import en from "../locales/en.json";
import zh from "../locales/zh.json";

const languages = { en, zh };

export function t(key, lang = "en") {
  return languages[lang]?.[key] || key;
}
