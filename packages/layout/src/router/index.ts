import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
