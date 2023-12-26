<script lang="ts" setup>
import { provide } from 'vue'

import ImChatHeader from '../header/index.vue'
import ImChatInputAction from '../input-action/index.vue'
import ImChatMsgLayout from '../msg/index.vue'

defineOptions({
  name: 'ImChat'
})

interface Props {
  synergy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  synergy: false
})

provide('synergy', props.synergy)
</script>

<template>
  <div :class="synergy && 'synergy'" class="chat-container">
    <ImChatHeader />
    <ImChatMsgLayout />
    <ImChatInputAction />
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
