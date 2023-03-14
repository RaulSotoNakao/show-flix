import { createI18n } from 'vue-i18n'
import enTra from './en_tra.json'
import esTra from './es_tra.json'
import caTra from './ca_tra.json'

const i18n = createI18n({
  locale: 'es',
  messages: {
    en: enTra,
    es: esTra,
    ca: caTra
  }
})

export default i18n
