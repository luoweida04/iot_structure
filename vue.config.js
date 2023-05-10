const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置代理
  devServer: {
    proxy: {
      //   /login是请求前缀
      '/api':{
        target: 'http://101.33.196.140:8081',
        // 下面的替换是正则表达式
        pathRewrite: {'^/api':''},// 重写路径
        ws: true, // 用于支持websocket
        changeOrigin: true,// false是向目标服务器告诉自己的端口是8080(实话)，true则告诉目标服务器自己的端口是与目标服务器一样（撒谎）
        // 实际上changeOrigin是控制请求头中的host值(如false是：localhost:8080)
      }
    }
  }
})
