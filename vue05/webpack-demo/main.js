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