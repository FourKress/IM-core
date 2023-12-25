<script setup lang="ts">
defineOptions({
  name: 'ImChatInputAction'
})

interface Props {
  showTopAction?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showTopAction: true
})

console.log(props)
</script>

<template>
  <div class="chat-input-action">
    <div class="action-opt" v-if="showTopAction">
      <div class="btn">
        <ImIcon :size="14" icon="im-icon-kuaijiehuifu" />
        <span class="label">结束咨询</span>
      </div>
      <div class="btn">
        <ImIcon :size="14" icon="im-icon-kuaijiehuifu" />
        <span class="label">继续办件</span>
      </div>
    </div>
    <div class="input-panel">
      <div contenteditable="true" class="input" placeholder="请输入" />
      <div class="opts c-fill-icon-dark">
        <div class="btn">
          <ImIcon icon="im-icon-a-biaoqing1" />
        </div>
        <div class="btn">
          <ImIcon icon="im-icon-a-jietu" />
        </div>
        <div class="btn">
          <ImIcon icon="im-icon-ocr" />
        </div>
        <div class="btn">
          <ImIcon icon="im-icon-tianjia-waiyuan" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
