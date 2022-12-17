import Layout from '@/layout/index'

const routes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/manage',
    meta: { title: 'user', icon: 'user' },
    children: [
      // 用户管理
      {
        path: '/user/manage',
        name: 'UserManage',
        component: () => import('@/views/userManage/userManage'),
        meta: { title: 'userManage', icon: 'user' }
      },
      // 角色列表
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('@/views/userManage/roleList'),
        meta: { title: 'userRole', icon: 'user' }
      },
      // 权限列表
      {
        path: '/user/permission',
        name: 'UserPermission',
        component: () => import('@/views/userManage/permissionList'),
        meta: { title: 'userPermission', icon: 'user' }
      },
      // 用户信息
      {
        path: '/user/info/:id',
        name: 'UserInfo',
        component: () => import('@/views/userManage/roleList'),
        meta: { title: 'userInfo' }
      },
      {
        path: '/user/import',
        name: 'UserImport',
        component: () => import('@/views/userManage/userImport'),
        meta: { title: 'userImport' }
      }
    ]
  }
]

export default routes
