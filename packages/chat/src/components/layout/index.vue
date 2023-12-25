<script setup lang="ts">
import ImChatHeader from '../header/index.vue'
import ImChatInputAction from '../input-action/index.vue'
import ImChatMsgLayout from '../msg/index.vue'

defineOptions({
  name: 'ImChat'
})
</script>

<template>
  <div class="chat-container">
    <ImChatHeader />
    <ImChatMsgLayout />
    <ImChatInputAction :showTopAction="true" />
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
