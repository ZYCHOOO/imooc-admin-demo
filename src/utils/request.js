import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isTimeout } from './auth'
import { getEnvValue } from './environment'

const service = axios.create({
  baseURL: getEnvValue('VUE_APP_BASE_API'),
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer${store.getters.token}`
    }
    // 配置接口国际化
    config.headers['Accept-Language'] = store.getters.language
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    const errorRes = error.response
    if (errorRes && errorRes.data && errorRes.data.code === 401) {
      // token 超时
      store.dispatch('user/login')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
