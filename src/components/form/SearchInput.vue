<script setup>
import IconMovieSearchOutline from '~icons/mdi/movie-search-outline'
import { useTvshowsStore } from '../../stores/tvshows'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useTvshowsStore()
let query = ref('')

const search = () => {
  store.setSearchQuery(query.value)
  router.replace({ name: 'search' })
}
</script>

<template>
  <div class="flex justify-center items-center border-b border-gray-300 rounded-lg pr-2 mx-2">
    <input
      type="search"
      id="default-search"
      class="block py-2 pl-5 text-sm bg-gray-50 focus:bg-slate-700 transition focus:text-white"
      placeholder="Search"
      v-model="query"
    />
    <IconMovieSearchOutline class="cursor-pointer" @click="search" />
  </div>
</template>
