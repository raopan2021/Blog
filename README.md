# 饶盼 の blog

研究了各种各样的博客框架，在各种config里面修改配置，经常出错或者看不懂。

说的就是你VuePress ，虽然感谢尤大大赏饭吃，但是vue的文档不是很好读懂。

docify太简单了，首页不能随意定制，另外目录结构不好搞，得手动改相关配置。

hexo主题多，但是使用了各种主题后，都不甚满意。

WordPress是用php写的，我不会，就没有具体研究了。

所以为什么不自己写一个呢？

### 本blog使用了vue2、vue-router、elementUI、sass。

只要你是个前端开发者，很容易自己定制的。

当然，你也可以直接去src/docs目录下，将自己的md文件夹替换进去。

> 注意，不能将md文件直接放在docs目录下，需要有文件夹包裹。

### 首页使用了“今日诗词”。

[今日诗词官网api](https://www.jinrishici.com/doc/#npm)

```js
npm i jinrishici --save // 官网上写的是'-i'，多了一个'-'
```

```js
<div class="onePoem">
    <span>{{ poem.content }}</span>
</div>

data () {
    return {
        poem: "",
    }
},  
methods: {
    getPoem () {
      const poemApi = require('jinrishici');
      poemApi.load(result => {
        this.poem = result.data
        console.log(this.poem);
	// {
	//     "id": "5b8b9572e116fb3714e71c1a",
	//     "content": "寒蝉凄切，对长亭晚，骤雨初歇。",
	//     "popularity": 819000,
	//     "origin": {
	//         "title": "雨霖铃·寒蝉凄切",
	//         "dynasty": "宋代",
	//         "author": "柳永",
	//         "content": [
	//             "寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。",
	//             "多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处，杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？"
	//         ],
	//         "translate": null
	//     },
	//     "matchTags": [
	//         "寒冷"
	//     ],
	//     "recommendedReason": "",
	//     "cacheAt": "2022-12-29T11:26:44.765699"
	// }
      });
    }
  },
```

### router跳转动画使用了animate.css

##### 在main.js引入

```
// 动画 animate.css
import animate from "animate.css";
```

##### 在页面使用

```html
<transition enter-active-class="animate__animated animate__zoomInLeft"
            leave-active-class="animate__animated animate__zoomOutLeft">
    <div></div>
</transition>
```

### 预览markdown文件，使用了vue-markdown-loader。

这个插件的文档也是稀烂。

去docs目录下，找“md文件批量注册为vue组件”，这里就不详述了。<router-link to="/docs">点击去往docs目录 </router-link>

### markdown样式使用了highlight.js

完成了上一步，这一步也就完成了。

### <a href="https://www.cnblogs.com/ainyi/p/14722182.html" target="_blank">批量导入md文件，注册为组件 </a>

具体方法也在docs目录下，找“md文件注册为vue组件”<router-link to="/docs">点击去往docs目录 </router-link>

这个有亿点点难，打开了n个网页找方法。

由于使用了el-menu切换md组件，所以需要获取@/doc文件夹的目录结构，再转为特定结构的数组，通过v-for循环。说的有点绕。

这个改数据结构挺麻烦的，瞎猫碰到死耗子居然搞成功了。

```
// 修改文件列表结构如下：
// [
//   {
//     "id": 0,
//     "filename": "Element",
//     "details": [
//       {
//         "id": 0,
//         "filename": "Element",
//         "mdname": "下拉框select"
//       },
//       {
//         "id": 1,
//         "filename": "Element",
//         "mdname": "弹窗dialog"
//       },
//       {
//         "id": 2,
//         "filename": "Element",
//         "mdname": "日期时间选择器"
//       },
//       {
//         "id": 3,
//         "filename": "Element",
//         "mdname": "翻页pagination"
//       },
//       {
//         "id": 4,
//         "filename": "Element",
//         "mdname": "表格"
//       }
//     ]
//   },
//   {
//     "id": 1,
//     "filename": "css",
//     "details": [
//       {
//         "id": 5,
//         "filename": "css",
//         "mdname": "css初始化"
//       },
//       {
//         "id": 6,
//         "filename": "css",
//         "mdname": "vue页面切换动画"
//       },
//       {
//         "id": 7,
//         "filename": "css",
//         "mdname": "滚动条"
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "filename": "node",
//     "details": [
//       {
//         "id": 8,
//         "filename": "node",
//         "mdname": "nvm切换node版本"
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "filename": "other",
//     "details": [
//       {
//         "id": 9,
//         "filename": "other",
//         "mdname": "全屏"
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "filename": "vue",
//     "details": [
//       {
//         "id": 10,
//         "filename": "vue",
//         "mdname": "vue中使用animate动画"
//       }
//     ]
//   }
// ]
```
