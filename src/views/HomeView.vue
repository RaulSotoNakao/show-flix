<script setup>
import { onMounted, computed, toRaw } from 'vue'
import Card from '../components/general/Card.vue'
import Pagination from '../components/general/Pagination.vue'
import { useTvshowsStore } from '../stores/tvshows'
import { useRouter } from 'vue-router'

const store = useTvshowsStore()
const getTvShowList = computed(() => {
  return store.getTvShowList
})

const getPage = computed(() => {
  return store.getPage
})
const getTotalPages = computed(() => {
  return store.getTotalPages
})

// lifecycle
onMounted(() => {
  store.fetchTvShowList(getPage.value)
})
const goBackPage = () => {
  store.fetchTvShowList(getPage.value - 1)
}
const goNextPage = () => {
  store.fetchTvShowList(getPage.value + 1)
}

const router = useRouter()

const showMore = (selectedTvShow) => {
  store.setSelectedTvShow(selectedTvShow)
  router.replace({ path: '/detail/'+selectedTvShow.id })
}
</script>

<template>
  <main>
    <section class="flex flex-col items-center pt-5">
      <Pagination
        :getPage="getPage"
        :getTotalPages="getTotalPages"
        @goBackPage="goBackPage"
        @goNextPage="goNextPage"
      />
    </section>
    <section class="flex flex-wrap justify-center pt-5">
      <Card
        class="mx-10 my-5"
        v-for="tvshow in getTvShowList"
        :title="tvshow.name"
        :stars="tvshow.vote_average"
        :date="tvshow.first_air_date"
        :urlImg="
          tvshow.backdrop_path ? `https://image.tmdb.org/t/p/original${tvshow.backdrop_path}` : ''
        "
        @showMore="() => showMore(tvshow)"
      />
    </section>
    <section class="flex flex-col items-center py-5">
      <Pagination
        :getPage="getPage"
        :getTotalPages="getTotalPages"
        @goBackPage="goBackPage"
        @goNextPage="goNextPage"
      />
    </section>
  </main>
</template>
