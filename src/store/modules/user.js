import md5 from 'md5'
import router from '@/router'
import { login } from '@/api/sys'
import { TOKEN_KEY } from '@/utils/enums'
import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN_KEY) || ''
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
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
            this.commit('user/setToken', 123123)
            router.push('/')
            resolve()
          })
          .catch((error) => {
            router.push('/')
            reject()
          })
      })
    }
  }
}
