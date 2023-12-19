<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'LsMenu'
})

const menu = ref<{ name: string; id: number }[]>([
  {
    name: '接待',
    id: 1
  },
  {
    name: '频道',
    id: 2
  }
])

let defaultSelectId = ref<number>(1)

const handleSelectMenu = (id: number): void => {
  defaultSelectId.value = id
}
</script>

<template>
  <div class="app-menu">
    <div class="menu">
      <div
        class="menu-item"
        @click="handleSelectMenu(item.id)"
        :class="defaultSelectId === item.id && 'menu-active'"
        v-for="item in menu"
        :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
