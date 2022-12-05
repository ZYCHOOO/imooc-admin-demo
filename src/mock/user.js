export default [
  // user login
  {
    url: '/sys/login',
    type: 'post',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          token: 'd3fe4b02-4fe3-44ea-b4ba-2047539bef2e'
        }
      }
    }
  },

  // get user info
  {
    url: '/sys/profile',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          avatar:
            'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png',
          id: '612710a9ec87aa543c9c3420',
          permission: {
            menus: [
              'userManage',
              'roleList',
              'permissionList',
              'articleRanking',
              'articleCreate'
            ],
            points: [
              'distributeRole',
              'importUser',
              'removeUser',
              'distributePermission'
            ]
          },
          role: [{ id: '1', title: '超级管理员' }],
          title: '超级管理员',
          username: 'super-admin',
          _id: '638cfc40dc0ccf437cb441db'
        }
      }
    }
  },

  // user logout
  {
    url: '/vue3-h5-template/user/logout',
    type: 'post',
    response: (_) => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
