import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 动画 animate.css
import animate from "animate.css";

import 'github-markdown-css/github-markdown.css';

// import Prism from 'prismjs';

// 点击鼠标，弹出❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤"
import "@/utils/specialEfficiency/mouseClick.js";
// 点击鼠标，出现烟花爆炸特效
import "@/utils/specialEfficiency/mouseMove.js";
// 鼠标移动，出现蜘蛛网特效
import "@/utils/specialEfficiency/mouseClickBlow.js";

// 页面滚动进度条、加载进度条插件
import NProgress from 'nprogress' //引入 nprogress 插件
import 'nprogress/nprogress.css' // 引入基础样式
NProgress.configure({showSpinner: false}); // 进度环显示隐藏
//当路由进入前
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});