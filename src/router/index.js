import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Homescreen from '@/screens/home/homescreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homescreen',
      component: Homescreen
    }
  ]
})
