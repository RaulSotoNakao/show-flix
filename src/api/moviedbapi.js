import axios from './axios.js'

const request = {
  tvShow: {
    get: ({ page }) => axios.get(`/tv/popular?page=${page}`),
    getTop: ({ page }) => axios.get(`/tv/top_rated?page=${page}`),
    getById: ({ tvshowid }) => axios.get(`/tv/${tvshowid}`),
    search: ({ query, page }) => axios.get(`/search/tv?query=${query}&page=${page}`)
  }
}

export default request
