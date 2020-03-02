import Vue from 'vue'
import Router from 'vue-router'

//跟路由
import home from '../views/Home.vue'
// 子路由
// import Index from "./childRoute"
import web from '../views/web'
import php from '../views/php'
import python from '../views/python'
import weekendWeb from '../views/weekenWeb'
import weekendPhp from '../views/weekenPhp'
import weekendPython from '../views/weekenPython'
import halfMPython from '../views/halfMPython'
import halfMWeb from '../views/halfMWeb'
import halfMPhp from '../views/halfMPhp'




Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      component: App,
      redirect: '/',
      children: [
        {
          path: '/index',
          component: home,
          redirect: '/Login',
          children: Index
        }
      ]
    }, */
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'halfMPhp', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMPhp',
          component: halfMPhp
        },
        {
          path: 'halfMWeb', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMWeb',
          component: halfMWeb
        },
        {
          path: 'halfMPython', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMPython',
          component: halfMPython
        },
      {
        path: 'web', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'web',
        component: web
      },
      {
        path: 'php', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'php',
        component: php
      },
      {
        path: 'weekendPython', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'weekendPython',
        component: weekendPython
      }, {
        path: 'weekendWeb', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'weekendWeb',
        component: weekendWeb
      },
      {
        path: 'weekendPhp', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'weekendPhp',
        component: weekendPhp
      },
      {
        path: 'python', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'python',
        component: python
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})