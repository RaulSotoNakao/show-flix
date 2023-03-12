<script setup>
import IconMenu from '~icons/mdi/menu'
import { ref } from 'vue'

let isDialogActive = ref(false)
const changeStateDialog = () => {
  isDialogActive.value = !isDialogActive.value
}
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="border hover:border-gray-500 font-bold py-2 px-4 rounded-full lg:hidden"
    @click="changeStateDialog"
  >
    <IconMenu />
  </button>

  <!-- Modal -->
  <div
    v-show="isDialogActive"
    class="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white rounded-md">
      <slot :changeStateDialog="changeStateDialog"></slot>
    </div>
  </div>
</template>
