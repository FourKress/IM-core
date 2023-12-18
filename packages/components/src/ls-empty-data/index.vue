<template>
  <div class="empty-data">
    <div class="empty-container flex flex-col flex-items-center justify-center bg-warning/40">
      <img :src="imgSrc" alt="" />
      <span class="tips c-warning/90 pb-36 cursor-pointer">{{ tips }}1</span>
      <el-button size="small" type="primary"> 测试恶趣味 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hello } from '@im-core/utils'
import { bg } from '@im-core/assets'

hello('211212121')

// console.log(fn())
// console.log(useLodash())

// const props = defineProps({
//   imgSrc: String,
//   tips: {
//     type: String,
//     default: '暂无数据',
//   },
// });

interface Props {
  imgSrc?: string
  tips?: string
}

const props = withDefaults(defineProps<Props>(), {
  imgSrc: bg,
  tips: '暂无数122223据'
})

console.log(props, 1)
</script>

<style scoped lang="scss">
@use 'style';
</style>
