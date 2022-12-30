"use strict";(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[955],{8334:function(s,n,t){t.d(n,{Z:function(){return o}});var e=function(){var s=this,n=s._self._c;return n("div",{staticClass:"head"},[n("div",{staticClass:"headRouter"},s._l(s.routeList,(function(t){return n("div",{key:t.id,class:s.activeindex==t.id?"activeComponent grid-content":"grid-content",on:{click:function(n){return s.click(t.route,t.id)}}},[n("i",{class:t.icon}),(t.route,n("span",[s._v(s._s(t.name))]))])})),0)])},a=[],r={name:"header-view",data(){return{activeindex:null,activeComponent:"",routeList:[{name:"首页",route:"/home",id:0,icon:"el-icon-house"},{name:"我的技术文档",route:"/docs",id:1,icon:"el-icon-notebook-2"},{name:"gitee",id:2,icon:"el-icon-position"},{name:"关于",route:"/about",id:3,icon:"el-icon-location-outline"}]}},mounted(){this.activeindex=sessionStorage.getItem("activeRoute")},methods:{click(s,n){s?(this.$router.push({path:s}),this.activeindex=n,sessionStorage.setItem("activeRoute",this.activeindex)):window.open("https://gitee.com/raopan2021/blog")}}},l=r,i=t(3736),c=(0,i.Z)(l,e,a,!1,null,null,null),o=c.exports},955:function(s,n,t){t.r(n),t.d(n,{default:function(){return h}});var e=function(){var s=this,n=s._self._c;return n("div",{staticClass:"about"},[n("VueScrollProgress"),n("header-view"),n("div",{staticClass:"doc-main"},[n("div",{staticClass:"markdown-body"},[n("div",{staticClass:"details"},[n("readme-view",{staticClass:"markdown-body"})],1)]),n("el-backtop",[n("div",{staticClass:"up"},[s._v("UP")])])],1)],1)},a=[],r=t(8334),l=function(){var s=this,n=s._self._c;return n("section",[n("html",[n("head"),n("body",[s._m(0),s._m(1),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),n("h3",[s._v("本blog使用了vue2、vue-router、elementUI、sass。")]),n("p",[s._v("只要你是个前端开发者，很容易自己定制的。")]),n("p",[s._v("当然，你也可以直接去src/docs目录下，将自己的md文件夹替换进去。")]),s._m(7),n("h3",[s._v("首页使用了“今日诗词”。")]),s._m(8),s._m(9),s._m(10),n("h3",[s._v("router跳转动画使用了animate.css")]),n("h5",[s._v("在main.js引入")]),s._m(11),n("h5",[s._v("在页面使用")]),s._m(12),n("h3",[s._v("预览markdown文件，使用了vue-markdown-loader。")]),n("p",[s._v("这个插件的文档也是稀烂。")]),n("p",[s._v("去docs目录下，找“md文件批量注册为vue组件”，这里就不详述了。"),n("router-link",{attrs:{to:"/docs"}},[s._v("点击去往docs目录 ")])],1),n("h3",[s._v("markdown样式使用了highlight.js")]),n("p",[s._v("完成了上一步，这一步也就完成了。")]),s._m(13),n("p",[s._v("具体方法也在docs目录下，找“md文件注册为vue组件”"),n("router-link",{attrs:{to:"/docs"}},[s._v("点击去往docs目录 ")])],1),n("p",[s._v("这个有亿点点难，打开了n个网页找方法。")]),n("p",[s._v("由于使用了el-menu切换md组件，所以需要获取@/doc文件夹的目录结构，再转为特定结构的数组，通过v-for循环。说的有点绕。")]),n("p",[s._v("这个改数据结构挺麻烦的，瞎猫碰到死耗子居然搞成功了。")]),s._m(14)])])])},i=[function(){var s=this,n=s._self._c;return n("h1",[n("a",{attrs:{href:"https://raopan2021.gitee.io/blog/#/home",target:"_blank"}},[s._v("饶盼 の blog")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("研究了各种各样的博客框架，在各种config里面修改配置，经常出错或者看不懂。")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("说的就是你VuePress ，虽然感谢尤大大赏饭吃，但是vue的文档不是很好读懂。")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("docify太简单了，首页不能随意定制，另外目录结构不好搞，得手动改相关配置。")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("hexo主题多，但是使用了各种主题后，都不甚满意。")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("WordPress是用php写的，我不会，就没有具体研究了。")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("所以为什么不自己写一个呢？")])])},function(){var s=this,n=s._self._c;return n("blockquote",[n("p",[s._v("注意，不能将md文件直接放在docs目录下，需要有文件夹包裹。")])])},function(){var s=this,n=s._self._c;return n("p",[n("a",{attrs:{href:"https://www.jinrishici.com/doc/#npm",target:"_blank"}},[s._v("今日诗词官网api")])])},function(){var s=this,n=s._self._c;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("npm i jinrishici --save "),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 官网上写的是'-i'，多了一个'-'")]),s._v("\n")])])},function(){var s=this,n=s._self._c;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("<div "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v("="),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onePoem"')]),s._v(">\n    "),n("span",{pre:!0,attrs:{class:"language-xml"}},[n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{ poem.content }}"),n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")])]),s._v("\n</div>\n\ndata () {\n    "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("poem")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(",\n    }\n},  \n"),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    getPoem () {\n      "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" poemApi = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'jinrishici'")]),s._v(");\n      poemApi."),n("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("load")]),s._v("("),n("span",{pre:!0,attrs:{class:"hljs-function"}},[n("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("result")]),s._v(" =>")]),s._v(" {\n        "),n("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),n("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("poem")]),s._v(" = result."),n("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("data")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),n("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),n("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),n("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("poem")]),s._v(");\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// {")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "id": "5b8b9572e116fb3714e71c1a",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "content": "寒蝉凄切，对长亭晚，骤雨初歇。",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "popularity": 819000,')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "origin": {')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "title": "雨霖铃·寒蝉凄切",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "dynasty": "宋代",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "author": "柳永",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "content": [')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//             "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//             "多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处，杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//         ],")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "translate": null')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     },")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "matchTags": [')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//         "寒冷"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     ],")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "recommendedReason": "",')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('//     "cacheAt": "2022-12-29T11:26:44.765699"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// }")]),s._v("\n      });\n    }\n  },\n")])])},function(){var s=this,n=s._self._c;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[s._v('// 动画 animate.css\nimport animate from "animate.css";\n')])])},function(){var s=this,n=s._self._c;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("transition")]),s._v(" "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enter-active-class")]),s._v("="),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animate__animated animate__zoomInLeft"')]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("leave-active-class")]),s._v("="),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animate__animated animate__zoomOutLeft"')]),s._v(">")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),n("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("transition")]),s._v(">")]),s._v("\n")])])},function(){var s=this,n=s._self._c;return n("h3",[n("a",{attrs:{href:"https://www.cnblogs.com/ainyi/p/14722182.html",target:"_blank"}},[s._v("批量导入md文件，注册为组件 ")])])},function(){var s=this,n=s._self._c;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[s._v('// 修改文件列表结构如下：\n// [\n//   {\n//     "id": 0,\n//     "filename": "Element",\n//     "details": [\n//       {\n//         "id": 0,\n//         "filename": "Element",\n//         "mdname": "下拉框select"\n//       },\n//       {\n//         "id": 1,\n//         "filename": "Element",\n//         "mdname": "弹窗dialog"\n//       },\n//       {\n//         "id": 2,\n//         "filename": "Element",\n//         "mdname": "日期时间选择器"\n//       },\n//       {\n//         "id": 3,\n//         "filename": "Element",\n//         "mdname": "翻页pagination"\n//       },\n//       {\n//         "id": 4,\n//         "filename": "Element",\n//         "mdname": "表格"\n//       }\n//     ]\n//   },\n//   {\n//     "id": 1,\n//     "filename": "css",\n//     "details": [\n//       {\n//         "id": 5,\n//         "filename": "css",\n//         "mdname": "css初始化"\n//       },\n//       {\n//         "id": 6,\n//         "filename": "css",\n//         "mdname": "vue页面切换动画"\n//       },\n//       {\n//         "id": 7,\n//         "filename": "css",\n//         "mdname": "滚动条"\n//       }\n//     ]\n//   },\n//   {\n//     "id": 2,\n//     "filename": "node",\n//     "details": [\n//       {\n//         "id": 8,\n//         "filename": "node",\n//         "mdname": "nvm切换node版本"\n//       }\n//     ]\n//   },\n//   {\n//     "id": 3,\n//     "filename": "other",\n//     "details": [\n//       {\n//         "id": 9,\n//         "filename": "other",\n//         "mdname": "全屏"\n//       }\n//     ]\n//   },\n//   {\n//     "id": 4,\n//     "filename": "vue",\n//     "details": [\n//       {\n//         "id": 10,\n//         "filename": "vue",\n//         "mdname": "vue中使用animate动画"\n//       }\n//     ]\n//   }\n// ]\n')])])}],c=t(3736),o={},_=(0,c.Z)(o,l,i,!1,null,null,null),v=_.exports,p={data(){return{}},components:{HeaderView:r.Z,ReadmeView:v},mounted(){},methods:{}},m=p,d=(0,c.Z)(m,e,a,!1,null,"47d23f7c",null),h=d.exports}}]);
//# sourceMappingURL=955.59f10190.js.map