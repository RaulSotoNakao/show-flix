<script setup>
import iconView from '~icons/mdi/eye-outline'
</script>

<template>
  <div class="bg-white shadow-lg hover:shadow-gray-500 font-bold rounded-lg w-60 my-2 mx-2">
    <div class="group relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src="https://image.tmdb.org/t/p/original/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg"
        class="h-60 w-full rounded"
        alt="Louvre"
      />
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-blue-500 bg-fixed bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50 flex justify-center items-center"
      >
        <button
          class="hidden group-hover:block border bg-white hover:border-blue-500 font-bold py-2 px-4 rounded-full"
          size="xs"
        >
          <iconView class="text-blue-500" />
        </button>
      </div>
    </div>
    <div class="py-2 px-2">
      <h1 class="text-blue-500 pb-2">Craft</h1>

      <div class="flex justify-between">
        <label class="text-xs"> SOTD: 17. dECEMBER 2026</label>
        <label class="text-xs"> 5</label>
      </div>
    </div>
  </div>
</template>
