<template>
  <div class="empty-data">
    <div class="empty-container">
      <img
        :src="imgSrc"
        alt=""
      >
      <span class="tips">{{ tips }}qwqwe</span>
      <el-button
        size="small"
        type="primary"
      >
        哈哈
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hello } from '@im-core/utils';
import { bg } from '@im-core/assets';

hello('211212121');

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
  imgSrc?: string;
  tips?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imgSrc: bg,
  tips: '暂无数122223据',
});

console.log(props, 1);
</script>

<style scoped lang="scss">
.empty-data {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .empty-container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);

    img {
      display: block;
      width: 141px;
      height: 124px;
    }

    .tips {
      padding-top: 16px;
      font-size: 14px;
      color: red;
    }
  }
}

.test-class {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #e9ecef;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
