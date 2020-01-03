const path = require('path');
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5   
})
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  //关闭eslint语法检查
  lintOnSave: false,

  configureWebpack: {// 当前配置需要写入该选项中
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
        'components': resolve('src/components'),
      }
    }
  },

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      // 处理以/api开头路径的请求
      // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
      '/api': {
        target: 'http://localhost:3000', // 转发的目标地址
        // target: 'http://kangjiachang.utools.club', // 转发的目标地址

        pathRewrite: {
          '^/api' : ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      },

      
    }
  },
}
