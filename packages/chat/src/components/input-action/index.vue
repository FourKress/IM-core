<script lang="ts" setup>
import { inject, ref } from 'vue'

defineOptions({
  name: 'ImChatInputAction'
})

const synergy = inject('synergy', false)

const chatInputClass = ref('')
const chatInputElement = ref<any>(null)
const chatInputHiddenElement = ref<any>(null)

const handleInput = () => {
  let textWidth = 0
  let textHeight = 0
  if (chatInputHiddenElement.value) {
    chatInputHiddenElement.value.innerHTML = chatInputElement.value?.innerHTML || ''
    const { width, height } = chatInputHiddenElement.value.getBoundingClientRect()

    textWidth = width
    textHeight = height
  }

  chatInputClass.value = textWidth > 274 || textHeight >= 20 ? 'expand' : ''
}
</script>

<template>
  <div class="chat-input-action">
    <div v-if="!synergy" class="action-opt">
      <div class="btn">
        <ImIcon :size="14" icon="im-icon-kuaijiehuifu" />
        <span class="label">结束咨询</span>
      </div>
      <div class="btn">
        <ImIcon :size="14" icon="im-icon-kuaijiehuifu" />
        <span class="label">继续办件</span>
      </div>
    </div>
    <div :class="chatInputClass" class="chat-input-panel">
      <div ref="chatInputElement" class="chat-input" contenteditable="true" @input="handleInput" />
      <div ref="chatInputHiddenElement" class="input-hidden"></div>
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

<style lang="scss" scoped>
@use 'style';
</style>
