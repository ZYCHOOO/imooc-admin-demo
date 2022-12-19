export default [
  {
    url: '/permission/list',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          total: 6,
          data: [
            {
              id: '1',
              permissionName: '员工管理',
              permissionDesc: '员工管理菜单',
              permissionMark: 'userManage',
              children: [
                {
                  id: '1-1',
                  permissionName: '分配角色',
                  permissionDesc: '为员工分配角色',
                  permissionMark: 'distributeRol',
                  children: []
                },
                {
                  id: '1-2',
                  permissionName: '导入员工',
                  permissionDesc: '通过 excel 导入员工',
                  permissionMark: 'importUser',
                  children: []
                },
                {
                  id: '1-3',
                  permissionName: '删除员工',
                  permissionDesc: '删除员工',
                  permissionMark: 'removeUser',
                  children: []
                }
              ]
            },
            {
              id: '2',
              permissionName: '角色列表',
              permissionDesc: '角色列表菜单',
              permissionMark: 'roleList',
              children: [
                {
                  id: '2-1',
                  permissionName: '分配权限',
                  permissionDesc: '为角色分配权限',
                  permissionMark: 'distributePermission',
                  children: []
                }
              ]
            },
            {
              id: '3',
              permissionName: '权限列表',
              permissionDesc: '权限列表菜单',
              permissionMark: 'permissionList',
              children: []
            },
            {
              id: '4',
              permissionName: '文章排名',
              permissionDesc: '文章排名菜单',
              permissionMark: 'articleRanking',
              children: []
            },
            {
              id: '5',
              permissionName: '创建文章',
              permissionDesc: '创建文章页面',
              permissionMark: 'articleCreate',
              children: []
            }
          ]
        }
      }
    }
  }
]
