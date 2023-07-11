import { createRouter, createWebHistory } from 'vue-router'

export const commonRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:error*',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }
]

export const menuRoutes = [
  {
    path: '/home',
    name: 'home',
    redirect: '/home/workplace',
    component: () => import('@/layouts/Layout.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'workplace',
        name: 'workplace',
        component: () => import('@/views/WorkPlace.vue'),
        meta: {
          elIcon: 'House',
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/list',
    name: 'list',
    redirect: '/list/table',
    component: () => import('@/layouts/Layout.vue'),
    meta: {
      elIcon: 'Document',
      title: '列表页'
    },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('../views/table/NormalTable.vue'),
        meta: {
          title: '查询表格'
        }
      },
      {
        path: 'card',
        name: 'card',
        component: () => import('../views/table/Card.vue'),
        meta: {
          title: '卡片'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: commonRoutes.concat(menuRoutes)
})

export default router
