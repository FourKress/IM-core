<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'MsgTimerTransform'
})

interface Props {
  timestamp: string | number
}

const props = withDefaults(defineProps<Props>(), {
  timestamp: ''
})

const timesText = computed(() => {
  const { timestamp } = props
  return timestamp
})
</script>

<template>
  <div class="msg-timer-transform">
    {{ timesText }}
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
