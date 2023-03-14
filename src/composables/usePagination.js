import { onBeforeUnmount } from 'vue'
import { useTvshowsStore } from '../stores/tvshows'
import { computed } from 'vue'

export function usePagination(fetchName) {
  const store = useTvshowsStore()

  const getPage = computed(() => {
    return store.getPage
  })
  const getTotalPages = computed(() => {
    return store.getTotalPages
  })

  const goBackPage = () => {
    store[fetchName](getPage.value - 1)
  }
  const goNextPage = () => {
    store[fetchName](getPage.value + 1)
  }
  onBeforeUnmount(() => {
    store.setDefaultPagination()
  })
  return { getPage, getTotalPages, goBackPage, goNextPage }
}
