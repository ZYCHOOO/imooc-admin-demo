import Layout from '@/layout/index'

const routes = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/manage',
    meta: { title: 'user', icon: 'personal' },
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
        meta: { title: 'userRole', icon: '' }
      },
      // 权限列表
      {
        path: '/user/permission',
        name: 'UserPermission',
        component: () => import('@/views/userManage/permissionList'),
        meta: { title: 'userPermission', icon: '' }
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
        component: () => import('@/views/userManage/roleList'),
        meta: { title: 'userImport' }
      }
    ]
  }
]

export default routes
