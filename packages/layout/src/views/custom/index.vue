<script lang="ts" setup>
import { ImChat, ImChatSynergy } from '@im-core/chat'
import { ImSideBar } from '@im-core/sidebar'

defineOptions({
  name: 'ImCustom'
})
</script>

<template>
  <div class="custom-page">
    <ImSideBar />
    <div class="main-container">
      <ImChat />
      <ImChatSynergy />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
