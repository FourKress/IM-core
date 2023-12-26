<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'MsgSendTips'
})

interface Msg {
  sendState: number
  receiptUserList: string[]
}

interface Props {
  msg?: Msg
  realMemberCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  msg: () => {
    return {
      sendState: 1,
      receiptUserList: ['1', '2', '3']
    }
  },
  realMemberCount: 4
})

const percent = computed(() => {
  const {
    msg: { receiptUserList },
    realMemberCount
  } = props

  const percent = (receiptUserList.length / realMemberCount) * 100
  return percent ? percent + 0.2 : percent
})
</script>

<template>
  <div class="send-tips">
    <div
      :style="{
        borderColor: msg.receiptUserList.length ? '#00C476' : '#DBDEE4'
      }"
      class="progress-bar">
      <div
        :style="{
          background: `conic-gradient(#00c476 0, #00c476 ${percent}%, #fff ${percent}%, #fff)`
        }"
        class="bar"></div>
    </div>
    <!--    <template v-if="msg.sendState !== 1">-->
    <!--      <img class="loading-icon" v-if="msg.sendState === 0" :src="LsAssets.loadingIcon" alt="" />-->
    <!--      <span class="send-error" v-if="msg.sendState === -1" @click="handleResendMsg">-->
    <!--        <LsIcon render-svg width="17" height="17" icon="a-zt_ts_icon2x"></LsIcon>-->
    <!--      </span>-->
    <!--    </template>-->
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
