<script lang="ts" setup>
import MsgLayout from './components/layout/index.vue'
import MsgNotify from './components/notify/index.vue'
import MsgTimesTransform from './components/times-transform/index.vue'

defineOptions({
  name: 'ImChatMsgLayout'
})
</script>

<template>
  <div class="chat-msg-layout">
    <MsgTimesTransform timestamp="12:22" />
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

<style lang="scss" scoped>
@use 'style';
</style>
