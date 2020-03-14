import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterArticle from '@/components/RegisterArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cadastrar',
      name: 'RegisterArticle',
      component: RegisterArticle
    }

  ]
})
