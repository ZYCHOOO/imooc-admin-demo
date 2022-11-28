import Layout from '@/layout/index'

const routes = [
  {
    path: '/article',
    component: Layout,
    redirect: '/article/ranking',
    meta: { title: 'article', icon: 'article' },
    children: [
      {
        path: '/article/ranking',
        name: 'ArticleRanking',
        component: () => import('@/views/articleManage/articleRanking'),
        meta: { title: 'articleRanking', icon: 'article' }
      },
      {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: () => import('@/views/articleManage/articleDetail'),
        meta: { title: 'articleDetail', icon: 'article' }
      },
      {
        path: '/article/create',
        name: 'ArticleCreate',
        component: () => import('@/views/articleManage/articleCreate'),
        meta: { title: 'articleCreate', icon: 'article' }
      },
      {
        path: '/article/edit/:id',
        name: 'ArticleEdit',
        component: () => import('@/views/articleManage/articleCreate'),
        meta: { title: 'articleCreate' }
      }
    ]
  }
]

export default routes
