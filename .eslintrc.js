// eslint 配置文件遵循 commonJs 导出规则，所导出的对象就是 eslint 的配置对象
module.exports = {
  // 表示当前目录即为根目录，eslint 规则将被限制到该目录下
  root: true,
  // env 表示启用 eslint 检测的环境
  env: {
    // 在 node 环境下启动 eslint 检测
    node: true
  },
  // eslint 中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启用规则以及各自的错误级别
  /**
   * off / 0 => 关闭规则
   * warn / 1 => 开启规则，使用警告级别的错误，不会导致程序退出
   * error / 2 => 开启规则，使用错误级别的错误，当被触发程序会退出
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'handle-callback-err': 'off',
    'prefer-promise-reject-errors': 'off'
  }
}
