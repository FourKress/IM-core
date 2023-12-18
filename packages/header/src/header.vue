<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'LsHeader'
})

const menu = ref<{ name: string; id: number }[]>([
  {
    name: '政务',
    id: 1
  },
  {
    name: '应急',
    id: 2
  },
  {
    name: '配置',
    id: 3
  }
])
let defaultSelectId = ref<number>(1)

const handleSelectMenu = (id: number): void => {
  defaultSelectId.value = id
}
</script>

<template>
  <header class="app-header">
    <div class="user">
      <div class="avatar">
        <img src="" alt="" />
      </div>
      <div class="info">
        <span class="name">张文文</span>
        <span class="address">重庆市-永川区</span>
      </div>
    </div>
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
  </header>
</template>

<style scoped lang="scss">
@use 'style';
</style>
