<script setup>
import Footer from '../components/page/Footer.vue'
import NavBar from '../components/page/NavBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar class="fixed bg-slate-50 shadow-md z-50 w-full flex justify-between items-center" />
    <div class="flex-1 w-full flex flex-col pt-10">
      <div class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
