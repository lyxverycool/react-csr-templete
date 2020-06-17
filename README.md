##  运用技术栈

`react v16.8 + webpack v4.x+ react-router-dom v5.0.0 + babel v7 + antd`

### 环境目录

`env`

### 安装

`npm install`

### 运行(开发模式)

`npm run start || npm run dev`  

`env==development react-hot-loader热更新`

### 构建

`npm run build` 

`env==production 打包在dist 目录下`

### tips 

#装了一个自己的组件lyxcool-test,可去掉

#用workbox注册了serviceWorker 可去掉

#添加了登录注册获取token逻辑 需配合项目
[https://github.com/lyxverycool/koa-server-templete](https://github.com/lyxverycool/koa-server-templete)

#可将webpack部分抽出独立的插件 已抽离 
[https://github.com/lyxverycool/lyxcool-webpack](https://github.com/lyxverycool/lyxcool-webpack)

由于我是用了webpack-merge 导出的webpack配置文件,这就带来一个问题，webpack.config.js导出的其实是一个变量为
env的匿名函数,而并非是一个对象。这个函数执行之后才是我们想要的webpack配置文件，所以通过修改webpack.config.js
来修改webpack配置是很困难的一件事。解决方法是：不用webpack-merge,针对dev和prod写两份配置文件，输出为对象而
非函数。这样就可以通过修改webpack.config.js 来扩展webpack配置了。

