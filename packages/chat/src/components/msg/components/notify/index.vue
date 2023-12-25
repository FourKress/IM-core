<script setup lang="ts">
defineOptions({
  name: 'MsgNotify'
})

interface Props {
  notify: string
}

const props = withDefaults(defineProps<Props>(), {
  notify: ''
})
console.log(props)
</script>

<template>
  <div class="msg-notify">
    {{ notify }}
    <span class="link">水电费</span>
    萨达撒
  </div>
</template>

<style scoped lang="scss">
@use 'style';
</style>
