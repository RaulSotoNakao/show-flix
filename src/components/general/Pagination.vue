<script setup>
import IconLeft from '~icons/mdi/chevron-left'
import IconRight from '~icons/mdi/chevron-right'
import { defineProps, defineEmits } from 'vue'

defineEmits(['goBackPage', 'goNextPage'])
const props = defineProps({
  getPage: {
    type: String,
    required: true
  },
  getTotalPages: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-center">
    <button
      :disabled="getPage <= 1"
      @click="() => $emit('goBackPage')"
      class="border hover:border-gray-500 font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <IconLeft />
    </button>
    <span class="px-4 flex items-center">{{ getPage }} / {{ getTotalPages }}</span>
    <button
      :disabled="getPage >= getTotalPages"
      @click="() => $emit('goNextPage')"
      class="border hover:border-gray-500 font-bold py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <IconRight />
    </button>
  </div>
</template>
