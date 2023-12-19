import './assets/base.css'
import 'virtual:uno.css'
import { createApp, App } from 'vue'
import { createPinia } from 'pinia'
import localforage from 'localforage'
import { generateRoute } from '@im-core/layout'
import { Theme } from '@im-core/styles'

import AppElement from './App.vue'

interface LayoutConfig {
  routes?: []
  menu?: []
  plugins?: []
  store?: []
}

const Layout = async (config: LayoutConfig = {}): Promise<App> => {
  const { routes = [] } = config

  window.$lanshuStore = localforage.createInstance({
    name: 'lanshuStore'
  })
  window.$localStore = localforage.createInstance({
    name: 'localStore'
  })
  window.$sessionStore = localforage.createInstance({
    name: 'sessionStore'
  })
  await window.$sessionStore.clear()

  // const { menu, routes, plugins = [], store } = config;
  // if (menu) {
  //   await window.$localStore.setItem('menu', menu);
  // } else {
  //   await window.$localStore.removeItem('menu');
  // }
  //
  // const completePlugins = [
  //   {
  //     visible: false,
  //     alwaysShow: true,
  //     component: PluginAppNav,
  //   },
  //   ...plugins,
  // ];
  // if (completePlugins?.length > 1) {
  //   await window.$localStore.setItem(
  //     'plugins',
  //     completePlugins.map((d) => {
  //       const { component, ...other } = d;
  //       return {
  //         ...other,
  //         key: component.name,
  //       };
  //     }),
  //   );
  //   completePlugins.forEach((d) => {
  //     const { component } = d;
  //     if (!component) return;
  //     Vue.component(component.name, component);
  //   });
  // } else {
  //   await window.$localStore.removeItem('plugins');
  // }

  // const completeRoutes = [...baseRoutes]
  // if (routes) {
  //   completeRoutes.push(...routes)
  // }
  //
  // let completeStore = { IMStore }
  // if (store) {
  //   completeStore = {
  //     ...completeStore,
  //     ...store
  //   }
  // }

  const app = createApp(AppElement)

  app.use(createPinia())
  app.use(generateRoute(routes))
  app.use(Theme)
  app.mount('#app')

  return app
}

export default Layout
