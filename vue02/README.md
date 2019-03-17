# 发送AJAX请求
## 简介
- vue本身不支持发送AJAX请求，需要使用vue-resource、axios(推荐)等插件实现
- axios是一个基于Promise的HTTP请求客户端，用来发送请求，也是vue2.0官方推荐的，同时不再对vue-resource进行更新和维护
- 参考：GitHub上搜索[axios](https://github.com/axios/axios)，查看API文档。

## 使用axios发送AJAX请求
### 安装axios并引入
- npm install axios -S
- 也可以直接下载axios.min.js文件

### 基本用法
- axios([options])
- axios.get(url[,options]);
    - 传参方式：
        - 通过url传参
        - 通过params选项传参
- axios.post(url,data[,options]);
    - axios默认发送数据时，数据格式是Request Payload，并非常用的Form Data格式，即表单格式，导致使用这样的post请求至后台拿不到数据。
    - 所以传参必须要以**键值对**形式传递，不能以json形式传参
    - 传参方式
        - 方式一：自己拼接为键值对
        - 方式二：使用`transformRequest`，在请求发送前将请求数据进行转换
        - 如果使用模块化开发，可以使用qs模块进行转换。
- axios本身**并不支持发送跨域**的请求，没有提供相应的API，作者也暂没有计划在axios添加支持发送跨域请求，所以只能使用第三方库

- [发送AJAX](https://github.com/wangwren/Vue-learning/blob/master/vue02/01.html)

### 使用vue-resource发送跨域请求
本身vue1.0推荐使用vue-resource，但是在vue2.0中也可以使用

#### 安装vue-resource并引入
```
npm install vue-resource -S
```

#### 基本用法
- 使用`this.$http`发送请求。[API](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md)
```
this.$http.get(url, [options])
this.$http.head(url, [options])
this.$http.delete(url, [options])
this.$http.jsonp(url, [options])
this.$http.post(url, [body], [options])
this.$http.put(url, [body], [options])
this.$http.patch(url, [body], [options])
```

[360搜索练习](https://github.com/wangwren/Vue-learning/blob/master/vue02/02.html)