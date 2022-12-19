import request from '@/utils/request'

export const getPermission = (params) => {
  return request({
    url: '/permission/list',
    method: 'GET',
    params
  })
}
