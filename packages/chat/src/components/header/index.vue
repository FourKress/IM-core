<script lang="ts" setup>
import { inject, ref } from 'vue'

defineOptions({
  name: 'ImChatHeader'
})

const isActive = ref(false)

const synergy = inject('synergy', false)

console.log(synergy, 'synergy')
const handleSelect = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div :class="synergy && 'synergy'" class="chat-header-container">
    <ImAvatar name="发生的"></ImAvatar>
    <div class="info"></div>
    <div class="opt-area">
      <div v-if="!synergy" :class="isActive && 'active'" class="btn" @click="handleSelect">
        协同
      </div>
      <ImIcon class="opt-icon" icon="im-icon-huiyi"></ImIcon>
      <ImIcon class="opt-icon" icon="im-icon-shipintonghua"></ImIcon>
      <ImIcon class="opt-icon" icon="im-icon-gengduo"></ImIcon>
      <ImIcon v-if="synergy" :size="20" class="opt-icon" icon="im-icon-guanbi"></ImIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
