import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/pages/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
