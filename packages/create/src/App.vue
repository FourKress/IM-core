<script lang="ts" setup>
import { onMounted } from 'vue'

import ImMainLayout from './components/layout/index.vue'

defineOptions({
  name: 'ImApp'
})

onMounted(() => {
  const el = document.documentElement
  const myColorPrimary = getComputedStyle(el).getPropertyValue(`--im-color-primary`)
  el.style.setProperty('--el-color-primary', `rgba(${myColorPrimary} / 1)`)
})
</script>

<template>
  <div id="im-app">
    <ImMainLayout />
  </div>
</template>

<style lang="scss" scoped>
#im-app {
  @apply box-border
  h-100vh
  overflow-hidden
  transform-gpu;
}
</style>
