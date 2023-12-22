/// <reference types="vite/client" />
import LocalForage from 'localforage'
import 'vue-router'

export {}

declare global {
  interface Window {
    $lanshuStore: LocalForage
    $localStore: LocalForage
    $chatStore: LocalForage
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    isFull?: boolean
  }
}
