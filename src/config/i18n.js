import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

// load translation files
/* eslint-disable import/no-webpack-loader-syntax */
const resBundle = require('i18next-resource-store-loader?include=\\.json$!../../locales/index.js')

Vue.use(VueI18Next)

const i18nextInstance = i18next.init({
  returnEmptyString: true,
  nsSeparator: false,
  keySeparator: false,
  lng: 'pt',
  fallbackLng: 'en',
  resources: resBundle
})
export const i18n = new VueI18Next(i18nextInstance)

export const getLanguage = () => i18next.language

export const changeLanguage = lang => {
  i18next.changeLanguage(lang)
}
