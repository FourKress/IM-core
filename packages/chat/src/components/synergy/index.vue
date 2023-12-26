<script lang="ts" setup>
import { computed, ref } from 'vue'

import ImChat from '../layout/index.vue'

defineOptions({
  name: 'ImChatSynergy'
})

const MAX_HEIGHT = 'calc(100% - 10px)'

const synergyList = ref<string[]>([])

const getBasicStyle = computed(() => {
  const length = synergyList.value.length
  let height = '40%'
  switch (length) {
    case 1:
      height = MAX_HEIGHT
      break
    case 2:
      height = 'calc(50% - 10px)'
      break
    case 3:
      height = '40%'
      break
  }
  return {
    height
  }
})
</script>

<template>
  <div class="chat-synergy-container">
    <div class="synergy-header">
      <span class="title">协同</span>
      <div class="synergy-opt">
        <div class="item">
          <img alt="" src="" />
        </div>
        <div class="item">
          <img alt="" src="" />
        </div>
        <div class="item">
          <img alt="" src="" />
        </div>
        <div class="item active">
          <img alt="" src="" />
        </div>
        <div class="item btn">
          <ImIcon :size="18" class="c-primary" icon="im-icon-tianjia"></ImIcon>
        </div>
      </div>
    </div>
    <div class="synergy-main">
      <div :style="getBasicStyle" class="chat-panel">
        <ImChat synergy />
      </div>
      <div :style="getBasicStyle" class="chat-panel">
        <ImChat synergy />
      </div>
      <div :style="getBasicStyle" class="chat-panel">
        <ImChat synergy />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
