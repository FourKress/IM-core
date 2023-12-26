<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'ImAvatar'
})

defineSlots<{
  name?: () => any
  tips: () => any
}>()

// defineProps({
//   ...avatarProps,
//   nickname: String,
//   tips: String,
//   badge: Number,
//   showInfo: {
//     type: Boolean
//   }
// })

interface Props {
  name?: string
  tips?: string
  badge?: number
  showInfo?: boolean
  src?: string
  size?: number
  shape?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  tips: '',
  badge: 0,
  showInfo: true,
  src: '',
  size: 32,
  shape: 'square'
})

const style = computed(() => {
  const { size } = props
  const value = `${size}px`
  return {
    width: value,
    height: value
  }
})
</script>

<template>
  <div class="im-avatar-container">
    <div :style="style" class="avatar">
      <el-badge :hidden="!badge" :value="badge">
        <el-avatar :shape="shape" :size="size" :src="src" />
      </el-badge>
    </div>
    <div v-if="showInfo" class="info">
      <span v-if="name" class="name">{{ name }}</span>
      <slot v-else name="name"></slot>
      <span v-if="tips" class="tips">{{ tips }}</span>
      <slot v-else name="tips"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
