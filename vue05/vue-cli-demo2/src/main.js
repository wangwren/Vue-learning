import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routeConfig from './router.config.js'
import axios from 'axios'

//使用VueRouter
Vue.use(VueRouter);

//创建路由实例
const router = new VueRouter(routeConfig);

//全局定义axios，再使用ajax时，使用this.$http.get/post 即可
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
