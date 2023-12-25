<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'ImButton'
})

interface Props {
  /** 按钮的类型 */
  type?: '' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
  /** 按钮是否为朴素样式 */
  plain?: boolean
  /** 按钮是否不可用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: '',
  plain: false,
  disabled: false
})

const classes = computed(() => {
  const result: string[] = []
  if (props.type) {
    result.push(`op-button--${props.type}`)
  }

  if (props.plain) {
    result.push('op-button--plain')
  }

  if (props.disabled) {
    result.push('op-button--disabled')
  }

  return result
})
</script>

<template>
  <button class="op-button" :class="classes">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use 'style';
</style>
