<template>
  <div class="empty-data">
    <div class="empty-container flex flex-col flex-items-center justify-center bg-warning/40">
      <img
        :src="imgSrc"
        alt=""
      >
      <span class="tips c-warning/20 pb-36 cursor-pointer">{{ tips }}1</span>
      <el-button
        size="small"
        type="primary"
      >
        哈哈
      </el-button>

      <div class="btns">
        <Button class="c-primary">
          Button
        </Button>
        <Button type="primary">
          Button
        </Button>
        <Button type="success">
          Button
        </Button>
        <Button type="danger">
          Button
        </Button>
        <Button type="warning">
          Button
        </Button>
        <Button type="info">
          Button
        </Button>
      </div>
      <div class="btns">
        <Button plain>
          Button
        </Button>
        <Button
          type="primary"
          plain
        >
          Button
        </Button>
        <Button
          type="success"
          plain
        >
          Button
        </Button>
        <Button
          type="danger"
          plain
        >
          Button
        </Button>
        <Button
          type="warning"
          plain
        >
          Button
        </Button>
        <Button
          type="info"
          plain
        >
          Button
        </Button>
      </div>
      <div class="btns">
        <Button disabled>
          Button
        </Button>
        <Button
          type="primary"
          disabled
        >
          Button
        </Button>
        <Button
          type="success"
          disabled
        >
          Button
        </Button>
        <Button
          type="danger"
          disabled
        >
          Button
        </Button>
        <Button
          type="warning"
          disabled
        >
          Button
        </Button>
        <Button
          type="info"
          disabled
        >
          Button
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hello } from '@im-core/utils';
import { bg } from '@im-core/assets';
import { Button } from '@im-core/button';

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
  z-index: 1;
  width: 100%;
  height: 100%;

  .empty-container {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 700px;
    height: 500px;
    transform: translate(-50%, -50%);

    img {
      display: block;
      width: 141px;
      height: 124px;
    }

    .tips {
      padding-top: 16px;
      font-size: 14px;
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
