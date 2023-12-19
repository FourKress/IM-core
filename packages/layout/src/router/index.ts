import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'
import custom from '../views/custom/index.vue'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'custom',
    component: custom,
    meta: {
      isFull: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      isFull: false
    }
  }
]

const generateRoute = (routes: RouteRecordRaw[]): Router => {
  const options: RouterOptions = {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...baseRoutes, ...routes]
  }
  return createRouter(options)
}

export default generateRoute
