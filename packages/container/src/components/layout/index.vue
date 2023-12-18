<script setup lang="ts">
import MainMenu from '../menu/index.vue'

defineOptions({
  name: 'LsMainLayout'
})
</script>

<template>
  <div id="ls-container">
    <div class="app-container">
      <MainMenu />
      <div class="main-container">
        <!--        <div :id="MICRO_CONTAINER" class="micro-app" v-if="isMicro"></div>-->
        <!--        <router-view class="router-view" v-else />-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
