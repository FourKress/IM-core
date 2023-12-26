import type { App, VNode } from 'vue'
import { createVNode, render } from 'vue'

import ContextMenu from './main.vue'

export interface Props {
  visible?: boolean
}

const handleRender = (props: Props): Promise<any> => {
  return new Promise((resolve, reject) => {
    const container = document.body

    function destroy() {
      render(null, container)
    }

    function closeCallBack() {
      destroy()
      reject()
    }

    function submitCallBack(val?: any) {
      destroy()
      resolve(val)
    }

    const vm: VNode = createVNode(ContextMenu, {
      ...props,
      closeCallBack,
      submitCallBack
    })

    render(vm, container)
  })
}
export const ImContextMenu = {
  install: (app: App) => {
    app.config.globalProperties.$ImContextMenu = (props: Props) => {
      return handleRender(props)
    }
  },
  open: (props: Props): Promise<any> => {
    return handleRender(props)
  }
}
