<script setup lang="ts">
import { ref } from 'vue'
import { useTheme, tinyThemeVars, themeVars } from '@im-core/styles'
import { RouterLink, RouterView } from 'vue-router'
import { LsEmptyData } from '@im-core/components'
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
  const myColorPrimary = getComputedStyle(el).getPropertyValue(`--op-color-primary`)
  console.log(`rgba(${myColorPrimary} / 1)`)
  el.style.setProperty('--el-color-primary', `rgba(${myColorPrimary} / 1)`)
}
</script>

<template>
  <header>
    <h3 class="c-primary font-bold">测试</h3>
    <img
      @click="switchGlobalTheme"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      {{ value }}
      <el-input v-model="input" placeholder="Please input" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <el-button type="primary">哈哈哈</el-button>
        <!--        <LsEmptyData></LsEmptyData>-->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (width >= 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
    margin-left: -1rem;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
