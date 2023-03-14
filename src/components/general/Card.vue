<script setup>
import iconView from '~icons/mdi/eye-outline'
import { defineProps, defineEmits } from 'vue'

defineEmits(['showMore'])

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  stars: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: ''
  },
  urlImg: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-white shadow-lg hover:shadow-gray-500 font-bold rounded-lg w-65 my-2 mx-2">
    <div class="group relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img :src="urlImg" class="h-60 w-full rounded" alt="imgNotFound" />
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-blue-500 bg-fixed bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50 flex justify-center items-center"
      >
        <button
          class="hidden group-hover:block border bg-white hover:border-blue-500 font-bold py-2 px-4 rounded-full"
          size="xs"
          @click="() => $emit('showMore')"
        >
          <iconView class="text-blue-500" />
        </button>
      </div>
    </div>
    <div class="py-2 px-2">
      <h1 class="text-blue-500 pb-2">{{ title }}</h1>

      <div class="flex justify-between">
        <label class="text-xs">{{ date }}</label>
        <label class="text-xs"> {{ stars }}</label>
      </div>
    </div>
  </div>
</template>
