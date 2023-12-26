<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'ImMenu'
})

const menu = ref<{ name: string; id: number; icon: string; activeIcon: string }[]>([
  {
    name: '接待',
    id: 1,
    icon: 'im-icon-yonghu',
    activeIcon: 'im-icon-a-yonghu1'
  },
  {
    name: '频道',
    id: 2,
    icon: 'im-icon-a-pindao',
    activeIcon: 'im-icon-pindao'
  }
])

let defaultSelectId = ref<number>(1)

const handleSelectMenu = (id: number): void => {
  defaultSelectId.value = id
}

const isSelected = (id: number): boolean => {
  return defaultSelectId.value === id
}
</script>

<template>
  <div class="im-menu">
    <div class="menu">
      <div
        v-for="item in menu"
        :key="item.id"
        :class="isSelected(item.id) && 'menu-active'"
        class="menu-item"
        @click="handleSelectMenu(item.id)">
        <ImIcon
          :height="16"
          :icon="isSelected(item.id) ? item.activeIcon : item.icon"
          :renderSvg="isSelected(item.id)"
          :width="16" />
        <span class="label"> {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
