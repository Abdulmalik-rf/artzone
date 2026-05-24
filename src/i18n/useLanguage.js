import { create } from 'zustand';
import translations, { categorySlugToKey, productNames, productDescriptions, optionGroupNames, optionValues } from './translations';

const useLanguage = create((set, get) => ({
  lang: localStorage.getItem('artzone-lang') || 'en',
  dir: (localStorage.getItem('artzone-lang') || 'en') === 'ar' ? 'rtl' : 'ltr',

  setLang: (lang) => {
    localStorage.setItem('artzone-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    set({ lang, dir: lang === 'ar' ? 'rtl' : 'ltr' });
  },

  toggleLang: () => {
    const newLang = get().lang === 'en' ? 'ar' : 'en';
    get().setLang(newLang);
  },

  // Get a translation by dot-path: t('nav.home')
  t: (path) => {
    const lang = get().lang;
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
          } else {
            return path; // Return the key path if not found
          }
        }
        return fallback;
      }
    }
    return result;
  },

  // Translate category name by slug
  translateCategory: (slug, englishName) => {
    const lang = get().lang;
    if (lang === 'en') return englishName;
    const key = categorySlugToKey[slug];
    if (key && translations.ar.categories[key]) {
      return translations.ar.categories[key];
    }
    return englishName;
  },

  // Translate product name
  translateProduct: (englishName) => {
    const lang = get().lang;
    return productNames[lang]?.[englishName] || englishName;
  },

  // Translate product description
  translateDescription: (englishName, englishDescription) => {
    const lang = get().lang;
    if (lang === 'en') return englishDescription;
    return productDescriptions.ar?.[englishName] || englishDescription;
  },

  // Translate option group name
  translateOptionGroup: (englishName) => {
    const lang = get().lang;
    if (lang === 'en') return englishName;
    return optionGroupNames.ar?.[englishName] || englishName;
  },

  // Translate option value
  translateOption: (englishName) => {
    const lang = get().lang;
    if (lang === 'en') return englishName;
    return optionValues.ar?.[englishName] || englishName;
  },

  // Format price in Saudi Riyal
  formatPrice: (amount) => {
    const lang = get().lang;
    const num = Number(amount).toFixed(2);
    return lang === 'ar' ? `${num} ر.س` : `${num} SAR`;
  },

  // Format price with + prefix
  formatPricePlus: (amount) => {
    const lang = get().lang;
    const num = Number(amount).toFixed(2);
    return lang === 'ar' ? `+${num} ر.س` : `+${num} SAR`;
  },

  isRTL: () => get().lang === 'ar',
}));

export default useLanguage;
