<script setup>
import { onMounted } from 'vue'
import Card from '../components/general/Card.vue'
import Pagination from '../components/general/Pagination.vue'
import { useTvshowsStore } from '../stores/tvshows'
import { useTvShow } from '../composables/useTvShow'
import { usePagination } from '../composables/usePagination'

const { getTvShowList, showMore } = useTvShow()
const { getPage, getTotalPages, goBackPage, goNextPage } = usePagination('fetchTopTvShowList')

const store = useTvshowsStore()

// lifecycle
onMounted(() => {
  store.fetchTopTvShowList(getPage.value)
})
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
