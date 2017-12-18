import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Nav1 from '@/components/Nav1'
import Nav2 from '@/components/Nav2'
import Nav3 from '@/components/Nav3'
import Nav4 from '@/components/Nav4'
import Nav5 from '@/components/Nav5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:Main,
      component:Main,
      redirect:'/nav1',
      children:[
        {
          path:'nav1',
          name:Nav1,
          component:Nav1,
          meta:{
            index:0
          }
        },
        {
          path:'nav2',
          name:Nav2,
          component:Nav2,
          meta:{
            index:1
          }
        },
        {
          path:'nav3',
          name:Nav3,
          component:Nav3,
          meta:{
            index:2
          }
        },
        {
          path:'nav4',
          name:Nav4,
          component:Nav4,
          meta:{
            index:3
          }
        },
        {
          path:'nav5',
          name:Nav5,
          component:Nav5,
          meta:{
            index:4
          }
        }
      ]
    }
  ]
})
