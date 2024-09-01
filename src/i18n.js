// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translations
import enTranslations from "./locales/en.json";
import hiTranslations from "./locales/hi.json";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      hi: {
        translation: hiTranslations,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
