import axiosBase from 'axios'
import i18n from '../i18n/index'
const axios = axiosBase.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: import.meta.env.VITE_TIMEOUT,
  params: {
    api_key: ''
  }
})
axios.defaults.params.api_key = import.meta.env['VITE_TOKEN']

axios.interceptors.request.use(
  (config) => {
    const actualParams = config.params

    const languageLibrary = {
      es: 'es-EU',
      en: 'en-US',
      ca: 'ca-EU'
    }
    const language = languageLibrary[i18n.global.locale]

    config.params = { ...actualParams, language }
    return config
  },
  (error) => Promise.reject(error)
)

export default axios
