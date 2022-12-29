import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 动画 animate.css
import animate from "animate.css";

import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

import Prism from 'prismjs';

// // 对highlight.js高亮处理后的代码块添加行号
// import {lineNumbersBlock} from "@/assets/hightLight/highlight-line-number"
// import '@/assets/hightLight/highlight-line-number.css'
// Vue.directive('highlight', {
//     update(el){
//         let blocks = el.querySelectorAll('pre code');
//         blocks.forEach((block)=>{
//             if(block.getAttribute("highlighted")=="true"){
//                 return
//             }
//             //防止已经高亮处理过的block再次被处理
//             block.setAttribute("highlighted","true")
//             //高亮
//             hljs.highlightElement(block)
//             //添加行号
//             lineNumbersBlock(block)
//         })
//     }
// })

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});