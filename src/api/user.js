import request from '@/utils/request'

// 获取项目功能
export const feature = (params) => {
  return request({
    url: '/user/feature',
    method: 'GET',
    params
  })
}

// 获取项目章节
export const chapter = (params) => {
  return request({
    url: '/user/chapter',
    method: 'GET',
    params
  })
}
