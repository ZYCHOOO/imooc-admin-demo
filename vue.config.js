const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // webpack devServer 提供了代理的能力，该代理可以把所有请求到当前服务器中的请求，转发代理到另一个服务器上
  devServer: {
    proxy: {
      '/api': {
        target: 'https://test.xxx.com', // 测试环境URL
        // ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        secure: false
      }
    }
  },
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        additionalData: `
          @import "~@/styles/mixins.scss";
        `
      }
    }
  },
  chainWebpack (config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
