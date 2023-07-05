import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/home',
      component: () => import('../layouts/Layout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
