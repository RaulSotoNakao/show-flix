<script setup>
import page from './layout/page.vue'
</script>

<template>
  <page>
    <RouterView />
  </page>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Signika Negative|Oswald');
html,
body {
  font-family: 'Signika Negative', sans-serif;
  background-color: #f2f2f2;
  font-weight: 600;
}

#app {
  font-family: 'Signika Negative', sans-serif;
}
</style>
