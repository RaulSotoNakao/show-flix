import { useTvshowsStore } from '../stores/tvshows'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function useTvShow() {
  const store = useTvshowsStore()

  const getTvShowList = computed(() => {
    return store.getTvShowList
  })

  const router = useRouter()

  const showMore = (selectedTvShow) => {
    store.setSelectedTvShow(selectedTvShow)
    router.replace({ path: '/detail/' + selectedTvShow.id })
  }

  return { getTvShowList, showMore }
}
