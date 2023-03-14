<script setup>
import { ref, watch } from 'vue'
import i18n from '../../i18n/index'
import { useTvshowsStore } from '../../stores/tvshows'
const store = useTvshowsStore()

let selectedLanguage = ref('es')

watch(selectedLanguage, (lang) => {
  i18n.global.locale = lang
  store.setLangStore(lang)
})
</script>

<template>
  <select
    id="countries"
    v-model="selectedLanguage"
    class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="ca">{{ $t('language.catalan') }}</option>
    <option value="en">{{ $t('language.english') }}</option>
    <option value="es">{{ $t('language.spain') }}</option>
  </select>
</template>
