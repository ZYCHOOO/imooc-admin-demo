import request from '@/utils/request'

/**
 * 获取用户列表
 */
export const getUserManageList = (params) => {
  return request({
    url: '/user-manage/list',
    method: 'GET',
    params
  })
}
