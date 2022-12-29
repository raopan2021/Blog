import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 动画 animate.css
import animate from "animate.css";

import 'github-markdown-css/github-markdown.css'

// import Prism from 'prismjs';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});