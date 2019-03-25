//路由配置
import Home from './components/Home'
import News from './components/News'

export default {
  routes : [
    {
      path : '/home',
      //注意没有s，就是component
      component : Home
    },
    {
      path : '/news',
      component : News
    }
  ]

}
