<script setup lang="ts">
defineOptions({
  name: 'LsHeader'
})
</script>

<template>
  <header class="app-header">
    <div class="user">
      <div class="avatar">
        <img src="" alt="" />
      </div>
      <div class="info">
        <span class="name font-bold">张文文</span>
        <span class="address">重庆市-永川区</span>
      </div>
    </div>
    <div class="menu">
      <div class="menu-item">政务</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use 'style';
</style>
