<script lang="ts" setup>
import ImChat from '../layout/index.vue'

defineOptions({
  name: 'ImChatSynergy'
})
</script>

<template>
  <div class="chat-synergy-container">
    <div class="synergy-header">
      <span class="title">协同</span>
    </div>
    <div class="synergy-main">
      <ImChat synergy />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
