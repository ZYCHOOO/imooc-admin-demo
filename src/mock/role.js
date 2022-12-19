export default [
  {
    url: '/role/list',
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
              title: '超级管理员',
              desc: '唯一账号，可以操作系统所有功能'
            },
            {
              id: '2',
              title: '管理员',
              desc: '由超管指定，可以为多个，协助超管管理系统'
            },
            {
              id: '3',
              title: '人事经理',
              desc: '主管人事相关业务'
            },
            {
              id: '4',
              title: '销售经理',
              desc: '主管销售相关业务'
            },
            {
              id: '5',
              title: '保安队长',
              desc: '主管安保相关业务'
            },
            {
              id: '6',
              title: '员工',
              desc: '普通员工'
            }
          ]
        }
      }
    }
  }
]
