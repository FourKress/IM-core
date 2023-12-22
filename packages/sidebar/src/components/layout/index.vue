<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ImSideBar'
})

let defaultSelectId = ref<number>(1)

const handleSelectChat = (id: number): void => {
  defaultSelectId.value = id
}

const chatLst = ref<{ name: string; id: number; time: string; value: number }[]>([
  {
    name: '李地方',
    id: 1,
    time: '11:11',
    value: 9
  },
  {
    name: '钢结构',
    id: 2,
    time: '12:12',
    value: 0
  }
])
</script>

<template>
  <div class="im-sidebar">
    <div class="sidebar-header">接待</div>
    <div class="sidebar-container">
      <div
        class="sidebar-item"
        @click="handleSelectChat(item.id)"
        :class="defaultSelectId === item.id && 'sidebar-active'"
        v-for="item in chatLst"
        :key="item.id">
        <ImAvatar
          src=""
          :size="40"
          :badge="item.value"
          :name="item.name"
          :tips="item.time"></ImAvatar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
