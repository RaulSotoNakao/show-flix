import { defineStore } from 'pinia'
import moviedbapi from '../api/moviedbapi'

export const useTvshowsStore = defineStore('tvshows', {
  state: () => ({
    tvShowList: [],
    page: 1,
    total_pages: 0,
    selectedTvShow: {},
    tvShowData: {},
    searchQuery: ''
  }),
  getters: {
    getTvShowList(state) {
      return state.tvShowList
    },
    getSearchQuery(state) {
      return state.searchQuery
    },
    getSelectedTvShow(state) {
      return state.selectedTvShow
    },
    getTvShowData(state) {
      return state.tvShowData
    },
    getPage(state) {
      return state.page
    },
    getTotalPages(state) {
      return state.total_pages
    }
  },
  actions: {
    fetchTvShowList(page = 1) {
      return moviedbapi.tvShow
        .get({ page })
        .then((res) => {
          this.tvShowList = res.data.results
          this.page = res.data.page
          this.total_pages = res.data.total_pages
        })
        .catch((err) => {
          this.tvShowList = []
          console.error(err)
        })
    },
    fetchTopTvShowList(page = 1) {
      return moviedbapi.tvShow
        .getTop({ page })
        .then((res) => {
          this.tvShowList = res.data.results
          this.page = res.data.page
          this.total_pages = res.data.total_pages
        })
        .catch((err) => {
          this.tvShowList = []
          console.error(err)
        })
    },
    fetchSearchTvShowList(query, page) {
      return moviedbapi.tvShow
        .search({ query, page })
        .then((res) => {
          this.tvShowList = res.data.results
          this.page = res.data.page
          this.total_pages = res.data.total_pages
        })
        .catch((err) => {
          this.tvShowList = []
          console.error(err)
        })
    },
    fetchTvShowData(tvshowid) {
      return moviedbapi.tvShow
        .getById({ tvshowid })
        .then((res) => {
          this.tvShowData = res.data
        })
        .catch((err) => {
          this.tvShowData = {}
          console.error(err)
        })
    },
    setSearchQuery(query) {
      this.searchQuery = query
    },
    setSelectedTvShow(selectedTvShow) {
      this.selectedTvShow = selectedTvShow

      return Promise.resolve(this.selectedTvShow)
    },
    setDefaultPagination() {
      this.page = 1
      this.total_pages = 0
    }
  }
})
