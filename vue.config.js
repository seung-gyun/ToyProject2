const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  devServer : {
    proxy : {
      '/savemoney' : {
        target : 'http://localhost:8080',
        changeOrigin : true,
      }
    }
  }
}