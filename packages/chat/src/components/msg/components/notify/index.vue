<script lang="ts" setup>
defineOptions({
  name: 'MsgNotify'
})

interface Props {
  notify: string
}

withDefaults(defineProps<Props>(), {
  notify: ''
})
</script>

<template>
  <div class="msg-notify">
    {{ notify }}
    <span class="link">水电费</span>
    萨达撒
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
