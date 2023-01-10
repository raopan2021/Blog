import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
    meta: { transition: 'zoom' },
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/home',
    name: 'home',
    meta: { transition: 'fade-in-up' },
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/docs',
    name: 'docs',
    meta: { transition: 'fade' },
    component: () => import("@/views/document/DocView.vue"),
  },
  {
    path: '/about',
    name: 'about',
    meta: { transition: 'overlay-up' },
    component: () => import("@/views/about/AboutView.vue"),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
