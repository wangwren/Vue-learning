# vue-router、vue-cli和单文件组件
## vue-router路由
### 简介
- 使用Vue.js开发SPA(Single Page Application)单页面应用。
- 根据不同的url地址，显示不同的内容，但显示在同一个页面中，称为单页面应用。
- [参考官网](https://router.vuejs.org/zh/)
- 安装
    - bower info vue-router 查看版本信息
    - cnpm install vue-router -S / npm install vue-router -S 安装

### 基本用法
- 布局
- 配置路由
- 参考代码：[vue-router路由基本用法01]()

### 路由嵌套和参数传递
- 传参的两种形式
    - 查询字符串：login?name=tom&pwd=123
        - {{$route.query}}
    - rest风格url：regist/alice/456
        - {{$route.params}}

### 路由实例的方法
- router.push() 添加路由，功能上与<route-link>相同
- router.replace() 替换路由，不产生历史记录。

### 路由结合动画

以上参考代码：[路由嵌套和参数传递02]()

## 单文件组件
