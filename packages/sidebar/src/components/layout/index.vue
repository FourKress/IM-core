<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ImSideBar'
})

let defaultSelectId = ref<number>(1)

const handleSelectSession = (id: number): void => {
  defaultSelectId.value = id
}

const sessionLst = ref<{ name: string; id: number; time: string }[]>([
  {
    name: '好地方',
    id: 1,
    time: '11:11'
  },
  {
    name: '钢结构',
    id: 2,
    time: '12:12'
  }
])
</script>

<template>
  <div class="im-sidebar">
    <div class="sidebar-header">接待</div>
    <div class="sidebar-container">
      <div
        class="sidebar-item"
        @click="handleSelectSession(item.id)"
        :class="defaultSelectId === item.id && 'sidebar-active'"
        v-for="item in sessionLst"
        :key="item.id">
        <div class="avatar"></div>
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="time">{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
