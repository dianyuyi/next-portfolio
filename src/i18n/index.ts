import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ZH_TW from './locales/zh_tw.json'
import EN_US from './locales/en_us.json'
import JA from './locales/ja.json'

i18n.use(initReactI18next).init({
  lng: 'en_us',
  fallbackLng: 'en_us',
  resources: {
    zh_tw: {
      translation: ZH_TW,
    },
    en_us: {
      translation: EN_US,
    },
    ja: {
      translation: JA,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
