import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: import.meta.env.VITE_TIMEOUT,
  params: {
    api_key: ''
  }
})
console.log(import.meta.env)
axios.defaults.params.api_key = import.meta.env['VITE_TOKEN']

export default axios
