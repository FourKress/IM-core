<script setup lang="ts">
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
  console.log(timestamp)
  return '21:30'
})
</script>

<template>
  <div class="msg-timer-transform">
    {{ timesText }}
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
