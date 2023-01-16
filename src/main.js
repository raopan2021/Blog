import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 动画 animate.css
import animate from "animate.css";
require("./assets/css/pageTranslate.css"); // 页面跳转动画

require("./assets/css/reset.css"); // 清除浏览器默认的样式


import 'github-markdown-css/github-markdown.css';

// 点击鼠标，弹出❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤"
import "@/utils/specialEfficiency/mouseClick.js";
// 点击鼠标，出现烟花爆炸特效
import "@/utils/specialEfficiency/mouseMove.js";
// 点击鼠标，出现烟花掉落特效
import "@/utils/specialEfficiency/mouseClickFireworks.js";
// 移动鼠标，出现蜘蛛网特效
import "@/utils/specialEfficiency/mouseClickBlow.js";

// 页面滚动进度条、加载进度条插件
import NProgress from 'nprogress' //引入 nprogress 插件
import 'nprogress/nprogress.css' // 引入基础样式
NProgress.configure({showSpinner: false}); // 进度环显示隐藏

// markdown样式
require("./assets/css/github-markdown.css"); // markdown的基本样式
import 'highlight.js/styles/kimbie-light.css' // 代码高亮样式
require("./assets/hightLight/highlight-line-number.css"); // markdown的行号样式
//引入highlight库
import hljs from 'highlight.js'
//按需加载代码高亮组件
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
//富文本插件代码块的配置属性
Vue.prototype.languages=[
    {language: 'javascript',label: 'JavaScript'},
    {language: 'html',label: 'HTML'},
    {language: 'css',label: 'CSS'},
    {language: 'json',label: 'JSON'}
]
// import {lineNumbersBlock} from "@/assets/hightLight/highlight-line-number"

Vue.directive('highlight', {
  update(el){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      if(block.getAttribute("highlighted")=="true"){
        return
      }
      block.setAttribute("highlighted","true") //防止已经高亮处理过的block再次被处理
      hljs.highlightElement(block); //高亮
      
      // lineNumbersBlock(block); //添加行号
      // 设置行号-但是无效
      // block.innerHTML="<div><div style='padding: 5px 0px 10px 20px'><span style='margin-right: 10px;padding: 5px;border: rgba(16, 125, 237,0.5) solid 1px;color:#107ded;border-radius: 5px'>"+ block.className.match(/(?<=language-).*(?= hljs)/).toString()+"</span><button class='el-button el-button--default el-button--mini' style='border-radius: 5px'>复制</button></div>"+block.innerHTML+"</div>"
      
      // let code = block.innerHTML// block.innerHTML="<div><span style='margin-right: 10px;padding: 3px;border: #107ded solid 1px;color:#107ded;border-radius: 5px'>"+ "test"+"</span><button>复制</button>"+block.innerHTML+"</div>"
      // // 复制代码按钮-但是无效
      // let copyButton = block.querySelector('button')
      // if(copyButton!=null){
      //   copyButton.onclick = function (){
      //     copy(code)
      //     Message.success({message:"复制成功！", offset:100})
      //   }
      // }
    })
  }
})

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

// 页面跳转动画
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});