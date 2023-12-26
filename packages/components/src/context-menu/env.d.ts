import { type Props } from './index'

export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $ImContextMenu: (props: Props) => Promise<any>
  }
}
