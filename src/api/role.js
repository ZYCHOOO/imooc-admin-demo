import request from '@/utils/request'

// 获取角色列表
export const getRoles = (params) => {
  return request({
    url: '/role/list',
    method: 'GET',
    params
  })
}
