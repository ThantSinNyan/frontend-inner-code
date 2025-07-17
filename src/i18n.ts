// src/i18n.ts
import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import my from './locales/my.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'en',  
  fallbackLocale: 'en',
  messages: {
    en,
    my
  }
})

export default i18n
