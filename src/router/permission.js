import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 用户已登录，不能进入login
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户信息是否存在，如果不存在，则获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
        // next(to.path)
      }
      next()
    }
  } else {
    // 用户未登录，只允许进入login
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
