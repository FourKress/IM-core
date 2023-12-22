<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'ImAvatar'
})

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
  name: string
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
console.log(props)
</script>

<template>
  <div class="im-avatar-container">
    <div class="avatar" :style="style">
      <el-badge :value="badge" :hidden="!badge">
        <el-avatar :size="size" :src="src" :shape="shape" />
      </el-badge>
    </div>
    <div class="info" v-if="showInfo">
      <span class="name" v-if="name">{{ name }}</span>
      <slot name="name" v-else></slot>
      <span class="tips" v-if="tips">{{ tips }}</span>
      <slot name="tips" v-else></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
