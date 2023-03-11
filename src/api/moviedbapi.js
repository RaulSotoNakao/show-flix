import axios from './axios.js'

const request = {
  tvShow: {
    get: () =>
      axios.get(
        `/tv/popular?language=en-US&page=1`
      )
  }
}

export default request
