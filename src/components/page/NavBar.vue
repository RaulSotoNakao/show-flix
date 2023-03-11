<script>
import IconGitHub from '~icons/mdi/github'
import IconFileFind from '~icons/mdi/file-find'
import moviedbapi from '../../api/moviedbapi'
export default {
  components: {
    IconGitHub
  },
  computed: {
    menu() {
      return [
        {
          text: this.$t('pagesGettingStartedNav'),
          route: { name: 'getting-started' }
        }
      ]
    }
  },
  methods: {
    testApi() {
      moviedbapi.tvShow
        .get()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }
}
</script>
<template>
  <div class="relative hidden lg:flex items-center ml-auto">
    <nav class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300" role="navigation">
      <ul class="flex items-center space-x-8">
        <li v-for="(item, i) in menu" :key="i">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="testApi"
            size="xs"
          >
            {{ item.text }}
            <IconFileFind />
          </button>
        </li>
      </ul>
    </nav>
    <div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]">
      <IconGitHub />
    </div>
  </div>
</template>
