import md5 from 'md5'
import app from './app'
import router from '@/router'
import { TOKEN_KEY } from '@/constant/enums'
import { login, getUserInfo } from '@/api/sys'
import { getTimeStamp, setTimeStamp } from '@/utils/auth'
import { getItem, setItem, removeAllItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN_KEY) || '',
    userInfo: {},
    permission: ['add-user', 'del-user', 'alter-user']
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     */
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            this.commit('user/setToken', data.token)
            // // 跳转至首页
            router.push('/')
            // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch((error) => {
            reject()
          })
      })
    },
    /**
     * 获取用户信息
     * @param {*} context
     */
    async getUserInfo (context, payload) {
      const res = await getUserInfo({ lang: payload.lang })
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 退出登录
     */
    logout () {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      // todo 清空权限
      router.push('/login')
    }
  }
}
