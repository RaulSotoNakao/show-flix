import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import moviedbapi from '../api/moviedbapi'

export const useTvshowsStore = defineStore('tvshows', {
  state: () => ({
    tvShowList: [],
    page: 1,
    total_pages: 0
  }),
  getters: {
    getTvShowList(state) {
      return state.tvShowList
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
    }
  }
})
