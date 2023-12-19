<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import LsHeader from '../header/index.vue'
import { LsMainLayout } from '@im-core/layout'

defineOptions({
  name: 'LsLayout'
})

const route = useRoute()

const isFull = computed(() => {
  const { isFull = false } = route.meta
  return isFull
})
</script>

<template>
  <div id="ls-layout" v-if="isFull">
    <LsHeader />
    <LsMainLayout />
  </div>
  <RouterView v-else class="router-view" />
</template>

<style scoped lang="scss">
@use 'style';
</style>
