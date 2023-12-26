<script lang="ts" setup>
import ImChat from '../layout/index.vue'

defineOptions({
  name: 'ImChatSynergy'
})
</script>

<template>
  <div class="chat-synergy-container">
    <div class="synergy-header">
      <span class="title">协同</span>
      <div class="synergy-list">
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
      <ImChat synergy />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
