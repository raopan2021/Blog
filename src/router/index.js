import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
    meta:{index:0}, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/home',
    name: 'home',
    meta:{index:1}, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/docs',
    name: 'docs',
    meta:{index:2}, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: () => import("@/views/document/DocView.vue"),
  },
  {
    path: '/about',
    name: 'about',
    meta:{index:3}, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: () => import("@/views/about/AboutView.vue"),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
