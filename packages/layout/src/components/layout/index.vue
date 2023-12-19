<script setup lang="ts">
// import { ImEmptyData } from '@im-core/components'
import ImMainMenu from '../menu/index.vue'

defineOptions({
  name: 'ImMainLayout'
})
</script>

<template>
  <div id="im-layout">
    <div class="app-container">
      <ImMainMenu />
      <div class="main-container">
        <!--        <div :id="MICRO_CONTAINER" class="micro-app" v-if="isMicro"></div>-->
        <!--        <router-view class="router-view" v-else />-->
        <!--        <ImEmptyData></ImEmptyData>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
