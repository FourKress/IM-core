<script setup lang="ts">
import { ImSideBar } from '@im-core/sidebar'
import { ImChat } from '@im-core/chat'
defineOptions({
  name: 'ImCustom'
})
</script>

<template>
  <div class="custom-page">
    <ImSideBar />
    <div class="main-container">
      <ImChat />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
