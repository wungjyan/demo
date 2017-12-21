import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NavEdit from '@/components/NavEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/edit',
      name:'NavEdit',
      component:NavEdit
    }
  ]
})
