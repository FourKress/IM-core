<script setup lang="ts">
import { ref } from 'vue'
// import { LsIcon } from '@im-core/components'
import { useTheme, tinyThemeVars, themeVars } from '@im-core/styles'

defineOptions({
  name: 'ImHeader'
})

const { setTheme } = useTheme()

const currentGlobalTheme = ref<'default' | 'tiny'>('default')

function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default'
    setTheme(themeVars)
  } else {
    currentGlobalTheme.value = 'tiny'
    setTheme(tinyThemeVars)
  }

  const el = document.documentElement
  const myColorPrimary = getComputedStyle(el).getPropertyValue(`--im-color-primary`)
  console.log(`rgba(${myColorPrimary} / 1)`)
  el.style.setProperty('--el-color-primary', `rgba(${myColorPrimary} / 1)`)
}

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
  <header class="im-header">
    <div class="user" @click="switchGlobalTheme">
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
        <!--        <LsIcon />-->
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use 'style';
</style>
