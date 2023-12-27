<script lang="ts" setup>
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

const contextMenu = [
  {
    label: '测试1',
    handle: () => {
      console.log('测试1')
    },
    hide: (arg: number) => {
      console.log('测试1')
      console.log(arg, params)
      return arg === params
    }
  },
  {
    label: '测试2',
    handle: () => {
      console.log('测试2')
    },
    hide: (arg: number) => {
      console.log('测试2')
      console.log(arg, params)
      return arg === params
    }
  }
]

const params = 2
</script>

<template>
  <div class="im-sidebar">
    <div class="sidebar-header">接待</div>
    <div class="sidebar-container">
      <div
        v-for="item in chatLst"
        :key="item.id"
        v-contextMenu:[item.id]="contextMenu"
        :class="defaultSelectId === item.id && 'sidebar-active'"
        class="sidebar-item"
        @click="handleSelectChat(item.id)">
        <ImAvatar
          :badge="item.value"
          :name="item.name"
          :size="40"
          :tips="item.time"
          src=""></ImAvatar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
