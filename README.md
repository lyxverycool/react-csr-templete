##  运用技术栈

`react v16.8 + webpack v4.x+ typescript + babel v7 + antd`

### 环境目录

`env`

### 安装

`npm install`

### 运行(开发模式)

`npm run start || npm run dev`  

### 构建

`npm run build` 

`env==production 打包在dist 目录下`

### 自动化

最初是用travis做自动化。但其实后来的github action 感觉更好用些，而且对私有项目支持比较友好。
这里是push tag的时候去触发action.

### tips 

#装了一个自己的组件lyxcool-test,可去掉

#用workbox注册了serviceWorker 可去掉

#添加了登录注册获取token逻辑 可去掉 需配合项目
[https://github.com/lyxverycool/koa-server-templete](https://github.com/lyxverycool/koa-server-templete)

#可将webpack部分抽出独立的插件 已抽离 
[https://github.com/lyxverycool/lyxcool-webpack](https://github.com/lyxverycool/lyxcool-webpack)

最初是用了webpack-merge 导出webpack配置文件,这就带来一个问题，webpack.config.js导出的其实是一个变量为
env的匿名函数,而并非是一个对象。这个函数执行之后才是我们想要的webpack配置文件，所以通过修改webpack.config.js
来修改webpack配置是很困难的一件事。解决方法是：不用webpack-merge,使用cross-env设置webpack环境变量，输出为对象而
非函数。这样就可以通过修改webpack.config.js 来扩展webpack配置了。

#随着项目的增大，webpack在dev模式下打包的时间会越来越长，比较明显的优化方法是在开发环境下不要分割代码，用同步的方式
去require 组件。可降低差不多一半的时间。方法：配置 "dynamic-import-node-babel-7" 已在lyxcool-webpack 安装该babel
