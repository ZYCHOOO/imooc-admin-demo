import { getQueryString } from '@/utils/index'

const roles = {
  '612710a9ec87aa543c9c3420': '超级管理员',
  '612710a9ec87aa543c9c3421': '管理员'
}
export default [
  {
    url: '/user-manage/list',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          total: 3,
          data: [
            {
              id: '612710a9ec87aa543c9c3420',
              _id: '612710a9ec87aa543c9c3420',
              avatar:
                'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
              mobile: '188xxxx0001',
              openTime: '1433088000000',
              role: [{ id: '1', title: '超级管理员' }],
              username: 'super-admin'
            },
            {
              id: '612710a9ec87aa543c9c3421',
              _id: '612710a9ec87aa543c9c3421',
              avatar:
                'https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg',
              mobile: '188xxxx0002',
              openTime: '1559318400000',
              role: [{ id: '2', title: '管理员' }],
              username: 'admin'
            }
          ]
        }
      }
    }
  },
  {
    url: '/user-manage/role',
    type: 'get',
    response: (config) => {
      console.log('config', config)
      const id = getQueryString(config.query, 'id')
      return {
        code: 200,
        success: true,
        data: roles[id]
      }
    }
  }
]
