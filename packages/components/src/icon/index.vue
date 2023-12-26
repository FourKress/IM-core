<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'ImIcon'
})

interface Props {
  icon: string
  renderSvg?: boolean
  size?: number
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  renderSvg: false,
  size: 16,
  width: 16,
  height: 16
})

const iconClass = computed(() => {
  // 兼容icon写法，可写全名或者省略 im-icon 前缀
  const { icon } = props
  return icon.includes('im-icon') ? icon : `im-icon-${icon}`
})

const svgStyle = computed(() => {
  const { width, height } = props
  return {
    width: `${width}px`,
    height: `${height}px`
  }
})

const iconStyle = computed(() => {
  const { size } = props
  return {
    fontSize: size ? `${size}px` : ''
  }
})

const emits = defineEmits<{
  click: []
}>()

const handleClick = () => {
  emits('click')
}
</script>

<template>
  <span class="im-icon-container">
    <!-- svg -->
    <svg
      v-if="renderSvg"
      :style="svgStyle"
      aria-hidden="true"
      class="im-icon im-icon-svg"
      @click="handleClick">
      <use :xlink:href="`#${iconClass}`"></use>
    </svg>
    <!-- class模式 -->
    <i
      v-else
      :class="iconClass"
      :style="iconStyle"
      class="im-icon im-icon-font"
      @click="handleClick"></i>
  </span>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
