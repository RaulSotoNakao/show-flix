<script>
import Dialog from '../general/Dialog.vue'
import SearchInput from '../form/SearchInput.vue'
import LanguageSelector from '../form/LanguageSelector.vue'
export default {
  components: {
    Dialog,
    SearchInput,
    LanguageSelector
  },
  data() {
    return {
      logorul: new URL('@/assets/showflixlogo.png', import.meta.url).href,
      isDialogActive: false
    }
  },
  computed: {
    menu() {
      return [
        {
          text: this.$t('home.tvlist'),
          route: { name: 'home' }
        },
        {
          text: this.$t('home.tvtop'),
          route: { name: 'top' }
        }
      ]
    }
  },
  methods: {
    changeMenu(item) {
      this.$router.replace(item.route)
      this.isDialogActive = false
    }
  }
}
</script>
<template>
  <div class="flex border-b lg:border-gray-900/10 dark:border-gray-50/[0.2] justify-between">
    <div class="pl-3 py-2 flex">
      <img class="object-fill h-8 w-10 pr-2" :src="logorul" />
      <span class="flex items-center text-base-black">Show Flix</span>
    </div>

    <div class="relative hidden lg:flex ml-auto">
      <nav
        class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
        role="navigation"
      >
        <ul class="flex items-center space-x-10">
          <li class="">
            <SearchInput />
          </li>
          <li v-for="(item, i) in menu" :key="i">
            <button
              @click="() => changeMenu(item)"
              class="cursor-pointer my-2 py-2 border-b hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
              size="xs"
            >
              {{ item.text }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="border-l mx-2">
        <LanguageSelector
          class="mx-2 my-2 border-b hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
        />
      </div>
    </div>
    <Dialog v-slot="slotProps" v-model="isDialogActive">
      <div class="w-80 shadow-xl px-5 py-5">
        <div>
          <nav
            class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
            role="navigation"
          >
            <ul class="flex flex-col justify-around">
              <li
                class="my-2 py-2 hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
              >
                <SearchInput />
              </li>
              <li
                class="cursor-pointer my-2 py-2 border-b hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
                v-for="(item, i) in menu"
                @click="() => changeMenu(item)"
                :key="i"
              >
                {{ item.text }}
              </li>
            </ul>
          </nav>
          <LanguageSelector
            class="my-2 py-2 border-b hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
          />
          <div class="flex flex-col items-center">
            <button
              type="button"
              class="bg-red-400 my-2 py-2 border-b hover:bg-slate-200 hover:border-gray-500 font-bold px-4 rounded-full"
              @click="slotProps.changeStateDialog"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>
