<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'ImChatHeader'
})

const isActive = ref(false)

const handleSelect = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="chat-header-container">
    <ImAvatar name="发生的"></ImAvatar>
    <div class="info"></div>
    <div class="opt-area">
      <div class="btn" :class="isActive && 'active'" @click="handleSelect">协同</div>
      <ImIcon icon="im-icon-shipintonghua" class="opt-icon"></ImIcon>
      <ImIcon icon="im-icon-gengduo" class="opt-icon"></ImIcon>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
