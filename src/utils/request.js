import axios from 'axios'
import store from '@/store'
import ELMessage from 'element-plus'
import { isTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
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
      ELMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    const errorRes = error.response
    if (errorRes && errorRes.data && errorRes.data.code === 401) {
      // token 超时
      store.dispatch('user/login')
    }
    ELMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
