import axios from './axios.js'

const request = {
  tvShow: {
    get: ({ page }) => axios.get(`/tv/popular?language=en-US&page=${page}`),
    getById: ({ tvshowid }) => axios.get(`/tv/${tvshowid}?language=en`),
    search: ({ query, page }) => axios.get(`/search/tv?language=en&query=${query}&page=${page}`)
  }
}

export default request
