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
  }
}
