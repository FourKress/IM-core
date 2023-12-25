<script lang="ts" setup>
import ImChatHeader from '../header/index.vue'
import ImChatInputAction from '../input-action/index.vue'
import ImChatMsgLayout from '../msg/index.vue'

defineOptions({
  name: 'ImChat'
})

interface Props {
  synergy?: boolean
}

withDefaults(defineProps<Props>(), {
  synergy: false
})
</script>

<template>
  <div :class="synergy && 'synergy'" class="chat-container">
    <ImChatHeader :synergy="synergy" />
    <ImChatMsgLayout />
    <ImChatInputAction :showTopAction="true" />
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
