<script setup lang="ts">
import MainLayout from './components/layout/index.vue'
defineOptions({
  name: 'LsApp'
})
</script>

<template>
  <div id="ls-app">
    <MainLayout />
  </div>
</template>

<style scoped lang="scss">
#ls-app {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
</style>
