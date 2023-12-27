<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

defineOptions({
  name: 'ImContextMenu'
})

interface Props {
  left: number
  top: number
  menu: any[]
  menuArg?: any
  closeCallBack: () => void
  submitCallBack: () => void
}

const contextMenuDom = ref<HTMLElement>()

const props = withDefaults(defineProps<Props>(), {
  left: -1000,
  top: -1000,
  closeCallBack: () => {},
  submitCallBack: () => {}
})

const positionStyle = computed(() => {
  const { left, top } = props
  const { clientWidth, clientHeight } = document.body

  const spaceSize = 10

  let computeLeft = left
  let computeTop = top

  const { width = 0, height = 0 } = contextMenuDom.value?.getBoundingClientRect() || {}

  if (computeLeft + spaceSize * 3 + width > clientWidth) {
    computeLeft = left - width - spaceSize
  }

  if (top + height > clientHeight) {
    computeTop = top - height
  }
  return {
    left: `${computeLeft}px`,
    top: `${computeTop}px`
  }
})

const handleGlobalClick = (event: Event) => {
  handleClose()
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleGlobalClick)
})

const handleSubmit = (item: any) => {
  item?.hide(props.menuArg)
  item?.handle()
  props.submitCallBack()
}
const handleClose = () => {
  props.closeCallBack()
}
</script>

<template>
  <div ref="contextMenuDom" :style="positionStyle" class="im-context-menu">
    <template v-for="item in menu">
      <div
        v-if="item?.hide(menuArg)"
        :key="item"
        class="menu-item"
        @click.stop="handleSubmit(item)">
        menu-item
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
