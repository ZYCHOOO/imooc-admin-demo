import { createRouter, createWebHashHistory } from 'vue-router'

import userRoutes from './modules/user'
import articleRoutes from './modules/article'

/**
 * 私有路由表
 */
const privateRoutes = [...userRoutes, ...articleRoutes]

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/login/index')
  },
  {
    path: '/',
    redirect: '/profile',
    component: () => import(/* webpackChunkName: 'index' */ '@/layout/index'),
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'Profile',
        component: () =>
          import(/* webpackChunkName: 'profile' */ '@/views/profile/profile'),
        meta: { title: 'profile', icon: 'user' }
      },
      // 404
      {
        path: '/404',
        name: '404',
        component: () =>
          import(/* webpackChunkName: '404' */ '@/views/error/404'),
        meta: { title: '', icon: '' }
      },
      // 401
      {
        path: '/401',
        name: '401',
        component: () =>
          import(/* webpackChunkName: '401' */ '@/views/error/401'),
        meta: { title: '', icon: '' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
