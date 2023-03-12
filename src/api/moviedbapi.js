import axios from './axios.js'

const request = {
  tvShow: {
    get: ({ page }) => axios.get(`/tv/popular?language=en-US&page=${page}`),
    getById: ({ tvshowid }) => axios.get(`/tv/${tvshowid}?language=en`)
  }
}

export default request
