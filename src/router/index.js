import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
    meta: { transition: 'zoom',title:"首页" },
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/home',
    name: 'home',
    meta: { transition: 'fade-in-up',title:"首页" },
    component: () => import("@/views/home/poem/PoemView.vue"),
  },
  {
    path: '/docs',
    name: 'docs',
    meta: { transition: 'fade',title:"我的技术文档" },
    component: () => import("@/views/document/DocView.vue"),
  },
  {
    path: '/about',
    name: 'about',
    meta: { transition: 'overlay-up',title:"关于我的blog" },
    component: () => import("@/views/about/AboutView.vue"),
  },
  {
    path: '/resume',
    name: 'resume',
    meta: { transition: 'overlay-up',title:"我的简历" },
    component: () => import("@/views/resume/ResumeView.vue"),
  },
  {
    path:'/404',
    name:'404',
    meta: { transition: 'overlay-up',title:"404" },
    component: resolve => require(['@/views/miss404/404.vue'], resolve),
  },
  {
    path:'*',
    redirect:{
        name:"404"
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title);
  next()
});

export default router
