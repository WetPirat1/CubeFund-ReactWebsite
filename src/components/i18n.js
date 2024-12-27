import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import ru from '../../ENtranslation.json';
import en from '../../RUtranslation.json';

i18n
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: en,
            },
            ru: {
                translation: ru,
            },
        },
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes
        },
    });

export default i18n;
