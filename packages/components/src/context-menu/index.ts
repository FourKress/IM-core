import { App, createVNode, render, VNode } from 'vue'

import ContextMenu from './main.vue'

export interface Props {
  visible?: boolean
}

export const ImContextMenu = {
  install: (app: App) => {
    app.directive('contextMenu', {
      mounted(el, b, c) {
        const { value } = b
        if (!value || !value?.length) return

        const menuArg = b.arg

        console.log(b, el)

        function handleContextMenu(event: MouseEvent) {
          const container = document.body

          const { clientX, clientY } = event
          const target = event.target as HTMLButtonElement
          if (target) {
            function destroy() {
              target.removeEventListener('contextmenu', handleContextMenu)
              render(null, container)
            }

            function closeCallBack() {
              destroy()
              console.log(22)
              // reject()
            }

            function submitCallBack(val?: any) {
              destroy()
              // resolve(val)
              console.log(11)
            }

            const vm: VNode = createVNode(ContextMenu, {
              left: clientX,
              top: clientY,
              menu: value,
              menuArg,
              closeCallBack,
              submitCallBack
            })

            render(vm, container)
          }
        }

        el.addEventListener('contextmenu', handleContextMenu)
      }
    })
  }
}
