import axios from './axios.js'

const request = {
  tvShow: {
    get: ({ page }) => axios.get(`/tv/popular?language=en-US&page=${page}`)
  }
}

export default request
