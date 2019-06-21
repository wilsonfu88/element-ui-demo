import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import List from './views/List.vue'
import Upload from './views/Upload.vue'
import Form from './views/Form.vue'
import Table from './views/Table.vue'
import Dialog from './views/Dialog.vue'
import Progress from './views/Progress.vue'
import Tree from './views/Tree.vue'
import Pagination from './views/Pagination.vue'
import Carousel from './views/Forms/Carousel.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index.html',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '*',
      name: '*',
      component: Home
    }
  ]
})
