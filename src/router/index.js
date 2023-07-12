import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/layouts/Dashboard/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('@/layouts/Login/Index.vue')
    }
  ]
})

export default router
