<script setup lang="ts">
import MsgSendTips from '../send-tips/index.vue'
import MsgCard from '../card/index.vue'
import { computed } from 'vue'

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
console.log(props)
</script>

<template>
  <div class="msg-panel" :class="classes">
    <div class="avatar">
      <ImAvatar src="" :size="24" :showInfo="!self">
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

<style scoped lang="scss">
@use 'style';
</style>
