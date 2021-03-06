# 组件及组件间的通信
## 组件
### 什么是组件
- 组件(Component)是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。
- 组件是自定义元素(对象)

### 定义组件的方式
- 方式一：先创建组件构造器，然后由组件构造器创建组件
- 方式二：直接创建组件
[定义组件](https://github.com/wangwren/Vue-learning/blob/master/vue04/01.html)

### 组件的分类
- 全局组件
- 局部组件
[组件的分类](https://github.com/wangwren/Vue-learning/blob/master/vue04/02.html)

### 引用模板
将组件内容放到模板<template>中并引用。  
[引用模板](https://github.com/wangwren/Vue-learning/blob/master/vue04/03.html)

### 动态组件
- <component> Vue内嵌组件
```html
<component :is="组件id">
    多个组件使用同一个挂载点，然后动态的在它们之间切换
</component>
```
- <keep-alive> Vue内嵌组件

[动态组件](https://github.com/wangwren/Vue-learning/blob/master/vue04/04.html)

## 组件间数据传递
### 父子组件
- 在**一个组件内部定义另一个组件**，称为父子组件。
- **子组件只能在父组件内部使用**。
- 默认情况下，子组件无法访问父组件中的数据，**每个组件实例的作用域都是独立的**。

### 组件间数据传递(通信)
#### 子组件访问父组件的数据
- 在调用子组件时，**绑定**想要获取的父组件中的数据。
- 在子组件内部，使用`props`向下传递数据给子组件。

总结：父组件通过`props`向下传递数据给子组件。  
注：组件中的数据共有三种形式：data、props、computed

#### 父组件访问子组件的数据
- 在子组件中使用`vm.$emit(事件名,数据1,数据2...)`触发一个自定义事件，事件名自己随便起。
- 父组件**在使用子组件的地方监听子组件触发的事件**，并在父组件中定义方法，用来获取数据。

总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。  

[组件间数据传递](https://github.com/wangwren/Vue-learning/blob/master/vue04/05.html)

### 单向数据流
- props是**单向绑定**的，当父组件的属性变化时，将传导给子组件，但是不会反过来
- 而且不允许子组件直接修改父组件中的数据，控制台会报错。
- 解决方式
    - 方式1：如果子组件想把它作为局部数据来使用，可以将数据存入另一个变量中再操作，不影响父组件中的数据
    - 方式2：如果子组件想修改数据并且同步更新到父组件，两种方法：
        - 使用`.sync`（1.0版本中支持，2.0版本中不支持，2.3版本中又开始支持），需要显示地触发一个更新事件。
        - **(推荐)可以将父组件中的数据包装成对象，然后在子组件中修改对象的属性(因为对象是引用类型，指向同一个内存空间，只改其属性不会影响对象)**
        
[单向数据流](https://github.com/wangwren/Vue-learning/blob/master/vue04/06.html)

### 非父子组件间的通信
非父子组件间的通信，可以通过一个空的Vue实例作为中央事件总线(事件中心)，用它来触发事件和监听事件。
```javascript
var Event = new Vue(); //创建一个空的Vue实例

Event.$emit(事件名,数据); //触发事件

Event.$on(事件名,data => {}); //监听事件
```

[非父子组件间的通信](https://github.com/wangwren/Vue-learning/blob/master/vue04/07.html)

## slot内容分发
- 本意：位置、槽
- 作用：用来获取组件中的原内容，即标签体中的内容。
- [slot内容分发](https://github.com/wangwren/Vue-learning/blob/master/vue04/08.html)