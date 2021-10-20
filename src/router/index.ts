import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import storage from '@/utils/storage'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/pages/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(to => {
  console.log('to', to)
  const token = storage.get('token')
  if (to.path !== '/login') {
    if (!token) {
      return '/login'
    }
  } else {
    if (token) {
      return '/main'
    }
  }
})

export default router
