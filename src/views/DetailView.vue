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
  <div class="py-10 px-5 flex justify-between flex-col md:flex-row">
    <div class="w-full md:w-5/12 rounded-lg bg-slate-50">
      <img
        :src="urlImg"
        class="h-60 md:h-80 w-full overflow-hidden bg-cover bg-no-repeat rounded-t-lg"
        alt="imgNotFound"
      />
      <div class="hover:bg-blue-500 hover:text-white text-center py-2 rounded-b-lg cursor-pointer">
        vota aqui
      </div>
    </div>
    <div class="w-6/12">
      <h1>name: {{ getTvShowData.name }}</h1>
      <p>first_air_date: {{ getTvShowData.first_air_date }}</p>
      <p>number_of_episodes: {{ getTvShowData.number_of_episodes }}</p>
      <p>overview: {{ getTvShowData.overview }}</p>
      <p>vote_average: {{ getTvShowData.vote_average }}</p>
      <p>vote_count: {{ getTvShowData.vote_count }}</p>
      <p>status: {{ getTvShowData.status }}</p>
      <p>{{ getTvShowData.name }}</p>
    </div>
  </div>
  <div class="flex flex-wrap justify-start pb-10 px-5">
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
