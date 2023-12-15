<script setup lang="ts">
import { ref } from 'vue'
import { useTheme, tinyThemeVars, themeVars } from '@im-core/styles'
import { RouterLink, RouterView } from 'vue-router'
import { LsEmptyData, LsButton } from '@im-core/components'
import { LsHeader } from '@im-core/header'
import * as wasm from 'hello-wasm-ls'

const baz = new wasm.Baz(121)
console.log(baz.field)

const value = baz.field

const input = ref('')

const { setTheme } = useTheme()

const currentGlobalTheme = ref<'default' | 'tiny'>('default')

// 全局主题切换
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default'
    setTheme(themeVars)
  } else {
    currentGlobalTheme.value = 'tiny'
    setTheme(tinyThemeVars)
  }

  const el = document.documentElement
  const myColorPrimary = getComputedStyle(el).getPropertyValue(`--ls-color-primary`)
  console.log(`rgba(${myColorPrimary} / 1)`)
  el.style.setProperty('--el-color-primary', `rgba(${myColorPrimary} / 1)`)
}
</script>

<template>
  <header>
    <LsHeader></LsHeader>
    <h3 class="c-primary font-bold">测试</h3>
    <img
      @click="switchGlobalTheme"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="btns">
      <LsButton> Button </LsButton>
      <LsButton type="primary"> Button </LsButton>
      <LsButton type="success"> Button </LsButton>
      <LsButton type="danger"> Button </LsButton>
      <LsButton type="warning"> Button </LsButton>
      <LsButton type="info"> Button </LsButton>
    </div>
    <div class="wrapper">
      {{ value }}
      <el-input v-model="input" placeholder="Please input" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <el-button type="primary">哈哈哈</el-button>
        <!--        <LsEmptyData @click="switchGlobalTheme"></LsEmptyData>-->
      </nav>
    </div>
  </header>

  <RouterView />
</template>
