<script lang="ts" setup>
import { ref } from 'vue'
import { ImAvatar } from '@im-core/components'
import { themeVars, tinyThemeVars, useTheme } from '@im-core/themes'

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
      <ImAvatar :size="36" src="">
        <template #name>
          <span class="name">张文文</span>
        </template>
        <template #tips>
          <span class="tips">重庆市-永川区</span>
        </template>
      </ImAvatar>
    </div>
    <div class="menu">
      <div
        v-for="item in menu"
        :key="item.id"
        :class="defaultSelectId === item.id && 'menu-active'"
        class="menu-item"
        @click="handleSelectMenu(item.id)">
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
