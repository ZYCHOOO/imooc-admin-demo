import request from '@/utils/request'

/**
 * 登录
 */
export const login = (data) => {
  return request({
    headers: {
      icode: 'ef47b135ff54622eb40e434c33ad5d82'
    },
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
