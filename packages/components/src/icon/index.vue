<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'ImIcon'
})

interface Props {
  icon: string
  color?: string
  renderSvg?: boolean
  size?: string | number
  width?: string | number
  height?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  color: '',
  renderSvg: false,
  size: 0,
  width: 16,
  height: 16
})

const iconClass = computed(() => {
  // 兼容icon写法，可写全名或者省略 im-icon 前缀
  const { icon } = props
  return icon.includes('im-icon') ? icon : `im-icon-${icon}`
})

const svgStyle = computed(() => {
  const { color, width, height } = props
  return {
    color,
    width,
    height
  }
})

const iconStyle = computed(() => {
  const { size, color } = props
  console.log(color)
  return {
    fontSize: size ? `${size}px` : '',
    color
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
      aria-hidden="true"
      class="im-icon im-icon-svg"
      :style="svgStyle"
      @click="handleClick">
      <use :xlink:href="`#${iconClass}`"></use>
    </svg>
    <!-- class模式 -->
    <i
      v-else
      class="im-icon im-icon-font"
      :class="iconClass"
      :style="iconStyle"
      @click="handleClick"></i>
  </span>
</template>

<style scoped lang="scss">
@use 'style';
</style>
