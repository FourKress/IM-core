<script setup lang="ts">
import { onMounted } from 'vue'

import ImMainLayout from './components/layout/index.vue'

defineOptions({
  name: 'ImApp'
})

onMounted(() => {
  const el = document.documentElement
  const myColorPrimary = getComputedStyle(el).getPropertyValue(`--im-color-primary`)
  console.log(`rgba(${myColorPrimary} / 1)`)
  el.style.setProperty('--el-color-primary', `rgba(${myColorPrimary} / 1)`)
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
