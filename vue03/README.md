# Vue生命周期及实例的属性和方法
## Vue生命周期
- vue实例从创建到销毁的过程，称之为生命周期，共有八个阶段。
- [代码](https://github.com/wangwren/Vue-learning/blob/master/vue03/03.html)
- [官方讲解](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
- [官方提供的图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)
![1552717843939](../image/3.png)

## 计算属性(很重要)
### 基本用法
计算属性也是用来存储数据的，类似data属性，但是计算属性具有以下几个特点：
- 数据可以进行逻辑处理操作。
- 对计算属性中的数据进行监视。

### 计算属性 VS 方法
将计算属性的getter函数定义为一个方法也可以实现类似的功能，但是有区别：
- 计算属性是**基于它的依赖进行更新的**，只有在**相关依赖发生改变时才能更新变化**
- 计算属性是**缓存的**，只要相关依赖没有改变，多次访问计算属性得到的值是之前缓存的计算结果，不会多次执行。

### getter 和 setter
- 计算属性由两部分组成：getter和setter，分别用来**获取计算属性**和**设置计算属性**。
- 默认只有getter，如果需要setter，需要自己添加。
- 这部分挺重要，看代码吧。


[**计算属性**](https://github.com/wangwren/Vue-learning/blob/master/vue03/04.html)

## Vue实例的属性和方法
- 以下这些属性和方法，都不是写在vue实例中的，在js块中就可以通过vm实例拿到实例中想要的。
### 属性
- vm.$el  获取vue实例关联的元素，拿到元素后可以进行操作，得到的是DOM对象。
- vm.$data  获取vue实例中数据对象data
- vm.$options  获取vue实例中自定义属性
- vm.$refs  获取页面中所有添加ref属性的元素

### 方法
- vm.$mount()  手动挂载vue实例
- vm.$destory()  销毁实例
- vm.$nextTick(callback)  （看代码能懂，运行）在DOM更新完成后再执行回调函数，一般在修改数据之后使用该方法，以便获取更新后的DOM

- 以上代码：[实例的属性和方法](https://github.com/wangwren/Vue-learning/blob/master/vue03/05.html)

- vm.$set(object,key,value) 通过vue实例的$set方法为对象添加属性，可以实时监视。object为对象，key代表对象中的属性，value表示值
- vm.$delete(object,key)  通过vue实例的$delete方法可以删除对象中的某一个属性

[添加和删除属性](https://github.com/wangwren/Vue-learning/blob/master/vue03/06.html)

- vm.$watch(data,callback[,options])  监视数据的变化，可以监视属性和对象，callback为回调函数，监视的data改变后会触发，可选项为true，表示深度监视，可监视对象中的属性被改变后触发回调函数

[监视数据的变化](https://github.com/wangwren/Vue-learning/blob/master/vue03/07.html)

## 自定义指令
分类：全局指令、局部指令

### 自定义全局指令
使用全局方法`Vue.directive(指令ID,定义对象)`定义对象中提供了五个钩子函数。

### 自定义局部指令
[自定义指令](https://github.com/wangwren/Vue-learning/blob/master/vue03/08.html)

### 练习
[使用鼠标拖动页面中的元素](https://github.com/wangwren/Vue-learning/blob/master/vue03/09.html)

## 过渡(动画)
### 简介
Vue在插入、更新或者移出DOM时，提供多种不同方式的应用过渡效果。  
本质上还是使用CSS3动画：transition、、animation

### 基本用法
- 使用transition组件，将要执行动画的元素包含在该组件内  
[过渡](https://github.com/wangwren/Vue-learning/blob/master/vue03/10.html)
```html
<!--要给transition起个name-->
<transition name="">
    运动的元素
</transition>
```

- 过渡的CSS类名：6个
![1552717843999](../image/4.png)

### 钩子函数
- 8个
```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

### 结合第三方动画库animate.css一起使用
- 结合animate.css一起使用时，可以使用自定义过渡的类名来引用样式
![1552717843009](../image/5.png)
```html
<!--animated必须要写，是基础样式-->
<transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
    <p v-show="flag">计科一班</p>
</transition> 
```
[使用animate.css](https://github.com/wangwren/Vue-learning/blob/master/vue03/11.html)

### 多元素动画
`<transition>`只能使单元素实现动画，如果有多个元素，就要使用`<transition-group>`标签。  
[多元素动画](https://github.com/wangwren/Vue-learning/blob/master/vue03/12.html)
### 练习
[多元素动画练习13](https://github.com/wangwren/Vue-learning/blob/master/vue03/13.html)