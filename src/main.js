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


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});