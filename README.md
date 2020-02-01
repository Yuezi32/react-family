基于create-react-app完善的项目架构

## 特性说明

1. 支持Sass/Scss/Less/Stylus
2. 已安装react-router-dom
3. 已安装redux、react-redux
4. 已安装redux-thunk
5. 已安装immutable
6. 已安装axios
7. 已安装mockjs
8. 支持浏览器Redux DevTools插件（需先在chrome应用商店添加Redux DevTools）
9. 支持反向代理（在src/setupProxy.js中配置）

## 目录结构

```
    ├─ /config               <-- eject后生成的配置目录
    |  ├─ /jest
    |  ├─ env.js
    |  ├─ module.js
    |  ├─ paths.js
    |  ├─ pnpTs.js
    |  ├─ webpack.config.js  <-- webpack配置文件
    |  └─ webpackDevServer.config.js
    ├─ /node_modules
    ├─ /public
    |  ├─ favicon.ico        <-- 网页图标
    |  └─ index.html         <-- HTML页模板
    ├─ /scripts              <-- eject后生成的脚本目录
    |  ├─ build.js           
    |  ├─ start.js           
    |  └─ test.js
    ├─ /src
    |  ├─ /common            <-- 全局公用目录
    |  |  ├─ /fonts          <-- 字体文件目录
    |  |  ├─ /images         <-- 图片文件目录
    |  |  ├─ /js             <-- 公用js文件目录
    |  |  |  ├─ api.js       <-- 统一管理API地址和常量等
    |  |  |  └─ commonLib.js <-- 公用js库（公用函数、常量等）
    |  |  └─ /stylus         <-- 公用样式文件目录
    |  |  |  ├─ frame.styl   <-- 全部公用样式（import其他css）
    |  |  |  ├─ reset.styl   <-- 清零样式
    |  |  |  └─ global.styl  <-- 全局公用样式
    |  ├─ /components        <-- 公共模块组件目录
    |  |  ├─ /header         <-- 头部导航模块（举例）
    |  |  |  ├─ /store       <-- header组件的store
    |  |  |  |  ├─ actionCreator.js
    |  |  |  |  ├─ constants.js
    |  |  |  |  ├─ index.js
    |  |  |  |  └─ reducer.js
    |  |  |  ├─ index.js     <-- header主文件
    |  |  |  └─ header.styl  <-- header样式文件
    |  |  └─ ...             <-- 其他模块
    |  ├─ /pages             <-- 页面组件目录
    |  |  ├─ /home           <-- home页目录（举例）
    |  |  |  ├─ index.js     <-- home主文件
    |  |  |  └─ home.styl    <-- home样式文件
    |  |  ├─ /login          <-- login页目录（举例）
    |  |  |  ├─ /store       <-- login组件的store
    |  |  |  |  ├─ actionCreator.js
    |  |  |  |  ├─ constants.js
    |  |  |  |  ├─ index.js
    |  |  |  |  └─ reducer.js
    |  |  |  ├─ index.js     <-- login主文件
    |  |  |  └─ login.styl   <-- login样式文件
    |  |  └─ ...             <-- 其他页面
    |  ├─ /store             <-- store总集目录（聚合其他组件的store）
    |  |  ├─ index.js
    |  |  └─ reducer.js             
    |  ├─ App.js             <-- 项目主模块
    |  ├─ index.js           <-- 项目入口文件
    |  ├─ mock.js            <-- mock数据
    |  └─ setupProxy.js      <-- 反向代理配置
    ├─ README.md
    ├─ package.json
    └─ yarn.lock
```
## className规范

1. 全局公用级别（不需要模块化）的className，用G-xxx。例如G-autocut(截字)、G-color-red(文字红色)。
2. 页面级别的className，用P-xxx。
3. 模块级别的className，用M-xxx。

## react超详细教程

该架构有超详细的教程，从零开始，逐步讲述React全家桶的一条龙服务，新手也能快速掌握。

【教程目录】
1 创建React-APP

2 精简项目

  2.1 删除文件

  2.2 简化代码

  2.3 使用Fragment去掉组件外层标签

3 项目目录结构

  3.1 引入全局公用样式

  3.2 支持Sass/Less/Stylus

4 路由

  4.1 页面构建

  4.2 使用react-router-dom

  4.3 路由跳转

5 组件引入

  5.1 创建header组件

  5.2 引入Header组件

  5.3 组件传参

6 React Developer Tools浏览器插件

7 Redux及相关插件
  
  7.1 安装redux

  7.2 安装react-redux

  7.3 安装redux-thunk

  7.4 安装浏览器Redux插件

  7.5 创建store

  7.6 复杂项目store分解

  7.7 对接react-redux与store

  7.8 启动Redux DevTools

  7.9 安装使用immutable

8 Mock.js安装与使用

9 解决本地开发跨域问题

10 其他常用工具

教程原文请关注我的公众号【卧梅又闻花】，如有问题欢迎在公众号私信交流。

查阅文章《超全面详细的一条龙教程！从零搭建React全家桶项目》