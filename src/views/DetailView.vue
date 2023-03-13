<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTvshowsStore } from '../stores/tvshows'
const store = useTvshowsStore()

const router = useRouter()

// lifecycle
onMounted(() => {
  const tvshowid = router.currentRoute.value.params.id
  store.fetchTvShowData(tvshowid)
})
const getTvShowData = computed(() => {
  return store.getTvShowData
})
const baseUrlImdb = 'https://image.tmdb.org/t/p/original'
let urlImg = computed(() => {
  const data = getTvShowData.value
  return data.backdrop_path ? `${baseUrlImdb}${data.backdrop_path}` : ''
})
</script>

<template>
  <div class="py-5 md:py-10 px-2 md:px-20 flex justify-between flex-col md:flex-row">
    <div class="w-full md:w-5/12 rounded-lg bg-slate-50 h-2/3">
      <img
        :src="urlImg"
        class="h-60 md:h-80 w-full overflow-hidden bg-cover bg-no-repeat rounded-t-lg"
        alt="imgNotFound"
      />
      <div class="text-center rounded-b-lg cursor-pointer flex justify-center">
        <p class="px-3 py-5 hover:bg-blue-500 hover:text-white w-4/12 rounded-b">
          Average {{ getTvShowData.vote_average }}
        </p>
        <p class="px-3 py-5 hover:bg-blue-500 hover:text-white w-4/12 rounded-b">
          Votes {{ getTvShowData.vote_count }}
        </p>
        <p class="px-3 py-5 hover:bg-blue-500 hover:text-white w-4/12 rounded-b">
          Popularity {{ getTvShowData.popularity }}
        </p>
      </div>
    </div>
    <div class="md:w-6/12 md:px-2">
      <h1 class="text-6xl text-center pb-6">{{ getTvShowData.name }}</h1>
      <p class="text-lg pb-6 text-justify">{{ getTvShowData.overview }}</p>

      <div class="flex justify-center">
        <p class="px-3 py-5 border-b border-t rounded-lg hover:shadow-lg w-4/12 rounded-b">
         <div> Date:</div> {{ getTvShowData.first_air_date }}
        </p>
        <p class="px-3 py-5 border-b border-t rounded-lg hover:shadow-lg  w-4/12 rounded-b">
          <div> Seasons:</div> {{ getTvShowData.number_of_seasons }}
        </p>
        <p class="px-3 py-5 border-b border-t rounded-lg hover:shadow-lg  w-4/12 rounded-b">
         <div> Episodes: </div>{{ getTvShowData.number_of_episodes }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-start py-5 md:py-10 px-2 md:px-20">
    <div v-for="season in getTvShowData.seasons" class="px-2 w-40">
      <p>{{ season.name }}</p>
      <img
        :src="`${baseUrlImdb}${season.poster_path}`"
        class="w-full overflow-hidden bg-cover bg-no-repeat rounded-t-lg"
        alt="imgNotFound"
      />
    </div>
  </div>
</template>
