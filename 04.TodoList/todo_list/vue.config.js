module.exports = {
  lintOnSave: false, // 关闭语法检查 
  // 开启代理服务器，用于解决开发时跨域问题 
  devServer: {
    proxy: 'http://localhost:8001'
  }
}
