import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'es',
  messages: {
    en: { test: 'eng', "pagesGettingStartedNav": "Nav eng" },
    es: { test: 'esp', "pagesGettingStartedNav": "Nav esp" },
    ca: { test: 'cat', "pagesGettingStartedNav": "Nav cat" }
  }
})

export default i18n
