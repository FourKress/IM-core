<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { LsEmptyData } from '@im-core/components';

import * as wasm from 'hello-wasm-ls';
import HelloWorld from './components/HelloWorld.vue';

const baz = new wasm.Baz(21);
console.log(baz.field);

const value = baz.field;
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@renderer/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      {{ value }}
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <el-button type="primary">哈哈哈</el-button>
        <LsEmptyData></LsEmptyData>
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

:root {
  --el-color-primary: red !important;
}
</style>
