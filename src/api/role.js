import reqeust from '@/utils/request'

// 获取角色列表
export const getRoles = (params) => {
  return reqeust({
    url: '/role/list',
    method: 'GET',
    params
  })
}
