# 运用技术栈

`react v16.8 + webpack v4.x+ react-router-dom v5.0.0 + babel v7 + antd`

# 环境目录

`env`

# 安装

`npm install`

# 运行(开发模式)

`npm run start || npm run dev`  

`env==development react-hot-loader热更新`

# 构建

`npm run build` 

`env==production 打包在dist 目录下`

# tips 

#Antd v3.8.4 后版本打包会引入大小差不多为400多k的Icon包，导致体积过大

#装了一个自己的组件lyxcool-test,可去掉

#添加了登录注册获取token逻辑 需配合koa-server-templete

#可将webpack部分抽出独立的插件