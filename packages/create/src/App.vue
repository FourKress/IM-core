<script setup lang="ts">
import ImMainLayout from './components/layout/index.vue'
defineOptions({
  name: 'ImApp'
})
</script>

<template>
  <div id="im-app">
    <ImMainLayout />
  </div>
</template>

<style scoped lang="scss">
#im-app {
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
</style>
