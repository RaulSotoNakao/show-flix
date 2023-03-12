<script>
import IconFileFind from '~icons/mdi/file-find'
import Dialog from '../general/Dialog.vue'
export default {
  components: {
    Dialog
  },
  data() {
    return {
      logorul: new URL('@/assets/showflixlogo.png', import.meta.url).href
    }
  },
  computed: {
    menu() {
      return [
        {
          text: this.$t('pagesGettingStartedNav'),
          route: { name: 'getting-started' }
        },
        {
          text: this.$t('pagesGettingStartedNav'),
          route: { name: 'getting-started' }
        },
        {
          text: this.$t('pagesGettingStartedNav'),
          route: { name: 'getting-started' }
        }
      ]
    }
  },
  methods: {}
}
</script>
<template>
  <div class="flex border-b lg:border-gray-900/10 dark:border-gray-50/[0.2] justify-between">
    <div class="pl-3 py-2 flex">
      <img class="object-fill h-8 w-10 pr-2" :src="logorul" />
      <span class="flex items-center text-base-black">Show Flix</span>
    </div>

    <div class="relative hidden lg:flex items-center ml-auto">
      <nav
        class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
        role="navigation"
      >
        <ul class="flex items-center space-x-8">
          <li v-for="(item, i) in menu" :key="i">
            <button class="border hover:border-gray-500 font-bold py-2 px-4 rounded-full" size="xs">
              {{ item.text }}

              <IconFileFind />
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"></div>
    </div>
    <Dialog v-slot="slotProps">
      <div class="w-screen">
        dsfsdf asdasdasd asdasdas {{ slotProps }}
        <div>sadsa</div>
        <button
          type="button"
          class="bg-slate-400 py-2 px-2 rounded"
          @click="slotProps.changeStateDialog"
        >
          close
        </button>
      </div>
    </Dialog>
  </div>
</template>
