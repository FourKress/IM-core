<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { ImMainLayout } from '@im-core/layout'

import ImHeader from '../header/index.vue'

defineOptions({
  name: 'ImMain'
})

const route = useRoute()

const isFull = computed(() => {
  const { isFull = false } = route.meta
  return isFull
})
</script>

<template>
  <div id="im-main" v-if="isFull">
    <ImHeader />
    <ImMainLayout />
  </div>
  <RouterView v-else class="router-view" />
</template>

<style scoped lang="scss">
@use 'style';
</style>
