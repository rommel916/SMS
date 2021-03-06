import Vue from 'vue'
import Router from 'vue-router'

//跟路由
import home from '../views/Home.vue'
// 子路由
// import Index from "./childRoute"
import day from '../views/release/day'
import wek from '../views/release/wek'


import management from '../views/release/management'
import manageDay  from '../views/release/manage/allManage'
import manageWek  from '../views/release/manage/manageWek'
import manageHMonth  from '../views/release/manage/manageHMonth'
import manageMonth  from '../views/release/manage/manageMonth'

import halfM from '../views/release/halfM'
import weekendWeb from '../views/weekenWeb'
import weekendPhp from '../views/weekenPhp'
import weekendPython from '../views/weekenPython'
import halfMPython from '../views/halfMPython'
import halfMWeb from '../views/halfMWeb'
import halfMPhp from '../views/halfMPhp'
import mPhp from '../views/mPhp'
import mWeb from '../views/mWeb'
import mPython from '../views/mPython'
import month from '../views/release/month'


import grade from '../views/Grade/grade'
import member from '../views/Grade/members/memberGrade'


import tongji from '../views/Grade/tongji'
import index from '../views/index'
import gradeChart from '../views/Grade/gradeChart'
import answer from '../views/Grade/answer'




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      children: [{
          path: 'halfMPhp', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMPhp',
          component: halfMPhp
        }, {
          path: '/',
          name: 'index',
          component: index,
        },{
          path: 'management',
          name: 'management',
          component: management,
        }, {
          path: 'manageDay',
          name: 'manageDay',
          component: manageDay,
        },{
          path: 'manageWek',
          name: 'manageWek',
          component: manageWek,
        },  {
          path: 'manageHMonth',
          name: 'manageHMonth',
          component: manageHMonth,
        }, {
          path: 'manageMonth',
          name: 'manageMonth',
          component: manageMonth,
        },  {
          path: 'gradeChart',
          name: 'gradeChart',
          component: gradeChart,
        },{
          path: 'grade/member/:user',
          name: 'member',
          component: member,
        },{
          path: 'month', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'month',
          component: month
        }, {
          path: 'answer', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'answer',
          component: answer
        },{
          path: 'grade', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'grade',
          component: grade,
        },
        {
          path: 'halfMWeb', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMWeb',
          component: halfMWeb
        }, {
          path: 'tongji', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'tongji',
          component: tongji
        },
        {
          path: 'halfMPython', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfMPython',
          component: halfMPython
        },
        {
          path: 'day', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'day',
          component: day
        },
        {
          path: 'wek', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'wek',
          component: wek
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
          path: 'halfM', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'halfM',
          component: halfM
        }, {
          path: 'mWeb', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mWeb',
          component: mWeb
        }, {
          path: 'mPython', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mPython',
          component: mPython
        }, {
          path: 'mPhp', //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'mPhp',
          component: mPhp
        },
      ]
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