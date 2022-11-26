import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'login' */ '@/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
