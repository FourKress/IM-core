<script lang="ts" setup>
import { computed } from 'vue'

import MsgCard from '../card/index.vue'
import MsgSendTips from '../send-tips/index.vue'

defineOptions({
  name: 'MsgPanel'
})

interface Props {
  self?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  self: false
})

const classes = computed(() => {
  const { self } = props
  return self ? 'right' : 'left'
})
</script>

<template>
  <div :class="classes" class="msg-panel">
    <div class="avatar">
      <ImAvatar :showInfo="!self" :size="24" src="">
        <template v-slot:name>
          <span class="c-text-subtitle">手打的</span>
        </template>
      </ImAvatar>
      <span class="tips">2023/10/08 10:20</span>
    </div>

    <div class="msg-panel-main">
      <MsgCard></MsgCard>

      <div class="tips">
        <MsgSendTips />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
