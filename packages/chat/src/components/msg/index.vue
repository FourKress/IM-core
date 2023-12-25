<script setup lang="ts">
import MsgTimesTransform from './components/times-transform/index.vue'
import MsgNotify from './components/notify/index.vue'
import MsgLayout from './components/layout/index.vue'

defineOptions({
  name: 'ImChatMsgLayout'
})
</script>

<template>
  <div class="chat-msg-layout">
    <MsgTimesTransform timestamp="123" />
    <MsgNotify notify="123123" />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />

    <MsgLayout :self="true" />
    <MsgLayout />
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
