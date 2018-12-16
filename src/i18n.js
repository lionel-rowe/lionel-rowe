import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zhCN from './locales/zh-CN.json';
import enUS from './locales/en-US.json'; /*
TODO:
* meta image - fit standard dimensions
* twitter acc - add
*/

const locales = { enUS, zhCN };

Object.keys(locales).forEach(key => {
  const locale = locales[key];

  if (locale.meta && locale.meta.description) {
    locale.missionStatement = locale.meta.description;
  }
});

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    'en-US': {
      translations: locales.enUS
    },
    'zh-CN': {
      translations: locales.zhCN
    }
  },

  fallbackLng: {
      'en': ['en-US'],
      'en-GB': ['en-US'],
      'zh': ['zh-CN', 'en-US'],
      'zh-HANS': ['zh-CN', 'en-US'],
      'zh-HANT': ['zh-CN', 'en-US'],
      'default': ['en-US']
  },

  debug: false, //switch back to true for automatic logging

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: '.', // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
