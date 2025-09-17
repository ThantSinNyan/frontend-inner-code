// src/i18n.ts
import { createI18n } from 'vue-i18n'

// English files
import enBase from '@/locales/en/en.json'
import enJourneyOverview from '@/locales/en/en_journey_overview.json'

// Myanmar files
import myBase from '@/locales/my/my.json'
import myJourneyOverview from '@/locales/my/my_journey_overview.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'en', // default from storage
  fallbackLocale: 'en',
  messages: {
    en: {
      ...enBase,
      journey: enJourneyOverview
    },
    my: {
      ...myBase,
      journey: myJourneyOverview
    }
  }
})

export default i18n
