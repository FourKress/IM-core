<script lang="ts" setup>
defineOptions({
  name: 'ImContextMenu'
})

interface Props {
  visible?: boolean
  closeCallBack: () => void
  submitCallBack: () => void
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  closeCallBack: () => {},
  submitCallBack: () => {}
})

console.log(props.visible)

const handleSubmit = () => {
  console.log(1)
  props.submitCallBack()
}
const handleClose = () => {
  console.log(2)
  props.closeCallBack()
}
</script>

<template>
  <div class="im-context-menu" @click="handleClose">
    <span @click.stop="handleSubmit">im-context-menu</span>
    <!--    <div v-if="visible" :style="position" class="context_menu-popover">-->
    <!--      <div class="context_menu-list">-->
    <!--        <div-->
    <!--          v-for="(item, index) in menuList"-->
    <!--          v-if="!item.hide || !item.hide(menuItemParams)"-->
    <!--          :key="index"-->
    <!--          class="context_menu-item"-->
    <!--          @click="contextMenuSure(item)">-->
    <!--          <LsIcon :icon="item.icon(menuItemParams)" color="#777777"></LsIcon>-->
    <!--          <div class="label">-->
    <!--            <Expand v-if="item.render" :render="item.render"></Expand>-->
    <!--            <div v-if="item.label" v-html="item.label(menuItemParams)"></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style lang="scss" scoped>
@use 'style';
</style>
