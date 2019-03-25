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
- 参考代码：[vue-router路由基本用法](https://github.com/wangwren/Vue-learning/blob/master/vue05/01.html)

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

以上参考代码：[路由嵌套和参数传递](https://github.com/wangwren/Vue-learning/blob/master/vue05/02.html)

## 单文件组件
### .vue文件
- .vue 文件称为单文件组件，是Vue.js自定义的一种文件格式，一个 .vue 文件就是一个单独的组件，在文件内封装了组件相关的代码：html、css、js
- .vue 文件由三部分组成：`<template>`、`<style>`、`<script>`
```html
<template>
    html
</template>

<style>
    css
</style>

<script>
    js
</script>
```

### vue-loader
- 浏览器本身并不认识 .vue 文件，所以必须对 .vue 文件进行加载解析，此时需要vue-loader
- 类似的loader还有很多，如：html-loader、css-loader、style-loader、babel-loader等
- 需要注意的是vue-loader是基于webpack的。

### webpack
- webpack是一个前端资源模板化加载器和打包工具，它能够把各种资源都作为模块来使用和处理。  
- 实际上，webpack是通过不同的loader将这些资源加载后打包，然后输出打包后的文件。  
- 简单来说，webpack就是一个模块加载器，所有资源都可以作为模块来加载，最后打包输出。  
- [官网](http://webpack.github.io/)
- webpack有一个核心配置文件：webpack.config.js ，必须放在项目根目录下。

### 示例
代码：[单文件组件](https://github.com/wangwren/Vue-learning/tree/master/vue05/webpack-demo)  
由于安装的都是最新版，启动时说不准会报什么错，所以很坑，不过在网上都已经找到了解决方法。所以还是按照遇到什么问题就解决什么问题吧。
#### 1.创建项目，目录结构如下：
webpack-demo  
    |-index.html  
    |-main.js   入口文件  
    |-App.vue   vue文件  
    |-package.json  工程文件  
    |-webpack.config.js     webpack配置文件  
    |-.babelrc  Babel配置文件  
    
![1552717843049](../../image/6.png)

#### 2.编写App.vue
```html

```

#### 3.安装相关模板
```
cnpm install vue -S

安装完上一步vue后，再执行合并部分
cnpm install webpack -D
cnpm install webpack-dev-server -D

cnpm install vue-loader -D
cnpm install vue-html-loader -D
cnpm install css-loader -D

还需要安装
npm install style-loader -D

cnpm install vue-style-loader -D
cnpm install file-loader -D

cnpm install babel-loader -D
cnpm install babel-core -D
cnpm install babel-preset-env -D  //根据配置的运行环境自动启用需要的babel插件
cnpm install vue-template-compiler -D //预编译模板
```
- 合并：`cnpm install -D webpack webpack-dev-server vue-loader vue-html-loader css-loader style-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env  vue-template-compiler`

#### 4.编写index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="app"></div>

    <!--是webpack配置中，指定输出的文件，需要引入进来-->
    <script src="build.js"></script>
</body>
</html>
```

#### 5.编写main.js
```javascript
/**
 *使用ES6语法引入模板
 */
import Vue from 'vue' //引入vue
import App from './App.vue' //引入组件，就算在同一个目录下，也必须加上 ./

new Vue({
    el : '#app',
    render : function (h) {
        //使用render函数渲染组件，与之前的components一样
        return h(App); //渲染App这个组件
    }
});
```

#### 6.编写webpack.config.js
```javascript
module.exports={
    //配置入口文件
    entry:'./main.js',
    //配置入口文件输出位置
    output:{
        path:__dirname, //项目根路径，两个下划线__
        filename:'build.js' //输出的文件名称
    },
    //配置模块加载器
    module:{
        rules:[
            {
                test:/\.vue$/, //所有以 .vue 结尾的文件都由vue-loader加载
                loader:'vue-loader'
            },
            {
                test:/\.js$/, //所有以 .js 结尾的文件都由babel-loader加载
                loader:'babel-loader',
                exclude:/node_modules/  //除了node_modules下的js文件
            }
        ]
    }
}
```

#### 7.编写.babelrc
```
{
  "presets": [
    ["env",{"module":false}]
  ]
}
```

#### 8.编写package.json
将其中的"script"选项改为下面这行代码
```
"scripts": {
    //指定webpack服务器，启动后自动打开浏览器，热加载，指定端口
    "dev":"webpack-dev-server --open --hot --port 8800"
  },
```

#### 9.在命令行窗口运行测试
```shell
npm run dev
```

## vue-cli脚手架
### 简介
- vue-cli是一个vue脚手架，可以快速构造项目结构
- vue-cli本身集成了多种项目模板：
    - simple    很少用，生成的目录结构太简单
    - webpack   包含ESlint代码规范检查和unit单元测试等
    - webpack-simple    没有代码规范检查和单元测试
    - browserify    使用的也比较多
    - browserify-simple
    
### 示例，步骤(webpack-simple)
#### 安装vue-cli，配置vue命令环境
- 安装：npm install vue-cli -g   (全局安装)
- 查看版本：vue --version
- 查看vue提供的模板：vue -list

#### 初始化项目，生成项目模板
语法：vue init 模板名 项目名

#### 进入生成的项目目录，安装模块包
```
cd vue-cli-demo  进入项目
npm install 安装项目所依赖的模块包
```

#### 运行
- npm run dev  启动测试服务
- npm run build  将项目打包输出到dist目录，项目上线的话要将dist目录拷贝到服务器上

[代码](https://github.com/wangwren/Vue-learning/tree/master/vue05/vue-cli-demo)

### 使用webpack模板
- vue init webpack vue-cli-demo2
- ESLint是用来统一代码规范和风格的工具，如缩进、空格、符号等，要求比较严格。
- [ESLint官网](http://eslint.org)

## 模块化开发
### 1.vue-router模块化
先安装vue-router  
npm install vue-router -S

#### 1.1编辑main.js

#### 1.2编辑App.vue

#### 1.3编辑router.config.js路由配置文件

### 2.axios模块化
安装axios  
npm install axios -S

- 使用axios的两种方式
    - 在每个组件中引入axios
    - 在main.js中全局引入axios并添加到Vue原型中
    
### 3.为自定义组件添加事件

[代码](https://github.com/wangwren/Vue-learning/tree/master/vue05/vue-cli-demo2)