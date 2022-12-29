<template>
  <div class="docs">
    <header-view></header-view>

    <div class="doc-main">

      <template>
        <div class="menu">
          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo">
            <el-submenu v-for="(floderItem, floderIndex) in mdList" :key="floderIndex.id" :index="floderIndex + ''">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ floderItem.filename }}</span>
              </template>

              <el-menu-item v-for="(mdItem, mdIndex) in floderItem.details" :key="mdItem.id"
                :index="floderItem.id + '-' + mdIndex" @click="menuClick(mdItem, mdIndex, floderIndex, floderItem)">
                {{ mdItem.mdname }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>

        <div class="markdown-body">
          <!-- 文章详情页面 -->
          <div class="details">
            <component :is="componentList[activeComponent]" class="markdown-body"></component>
          </div>
        </div>
        <el-backtop>
          <div class="up">UP</div>
        </el-backtop>
      </template>

    </div>
  </div>
</template>

<script>
// 导入根目录/docs，这个文件夹下面的所有md文件
const mdComponent = require.context('@/docs',true,/\.(md)$/)

const components = {}; // md组件集合
const filterCmps = [];

mdComponent.keys().forEach((fileName,index) => {
  let component = mdComponent(fileName).default
  !filterCmps.includes(fileName) && (components["mdComponent" + index] = component)
})

import HeaderView from "@/components/Header.vue";

export default {
  data () {
    return {
      mdList: [], // 文件列表(json格式)
      activeComponent: 0, // 当前打开的md组件
      activeIndex: '0-0', // 当前el-menu打开的index
      // 这里做排序处理，按原型图可拆分的模块顺序，将每个组件的 name 命名为 xxx_${index}
      // 为什么做排序？为了循环依次应用子组件
      componentList: Object.keys(components).sort(
        (a,b) => a.split('_')[1] - b.split('_')[1]
      )
    }
  },
  components: {
    HeaderView,
    ...components
  },
  mounted () {
    this.getMdFileName(); // 获取md文件名称

    this.activeComponent = localStorage.getItem("activeComponent")
    this.activeIndex = localStorage.getItem("activeIndex")
  },
  methods: {
    // 获取md文件名称
    // 获取文件列表
    // 修改文件列表结构
    getMdFileName () {
      let list = mdComponent.keys();
      list.forEach((value,index,arr) => {
        const pos = value.lastIndexOf('/');
        value = value.substr(pos + 1);
        value = value.replace(".md","");
      })

      // 获取文件列表fileList如下：
      // [
      //   {  "id": 0,"filename": "Element","mdname": "下拉框select"},
      //   {  "id": 1,  "filename": "Element",  "mdname": "弹窗dialog"},
      //   ...
      // ]
      let fileList = [];
      list.forEach((value,index,arr) => {
        // ./Element/下拉框select.md
        value = value.replace("./",""); // 去掉 ./
        value = value.replace(".md",""); // 去掉 .md
        // Element/下拉框select

        const pos = value.lastIndexOf('/'); // 获取 / 的索引
        const filename = value.substring(0,pos); // 获取文件夹名称
        const mdname = value.substring(pos + 1); // 获取文件名称

        const obj = {
          id: index,
          filename: filename,
          mdname: mdname
        }
        fileList.push(obj); // 得到文件列表fileList
      })

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
      let fileJsonList = []; // 调整好的文件列表
      let outsideIndex = 0; // 文件列表外部的index索引，也是文件夹的id
      let indideIndex = 0; // 文件列表内部的文件index索引，也是文件的id
      for (let index = 0; index < fileList.length; index++) {
        // 初始化，处理第一个文件
        if (index == 0) {
          const obj = {
            id: outsideIndex,
            filename: fileList[index].filename,
            details: [fileList[index]],
          }
          fileJsonList[outsideIndex] = obj;
          indideIndex += 1;
        }
        // 当下一个文件和上一个文件，同属于一个文件夹
        if (index != 0 && fileList[index].filename == fileList[index - 1].filename) {
          fileJsonList[outsideIndex].details.push(fileList[index])
        }
        // 当下一个文件和上一个文件，不属于一个文件夹
        if (index != 0 && fileList[index].filename != fileList[index - 1].filename) {
          outsideIndex++;
          const obj = {
            id: outsideIndex,
            filename: fileList[index].filename,
            details: [fileList[index]],
          }
          fileJsonList[outsideIndex] = obj;
          indideIndex = 0;
        }
      }
      this.mdList = fileJsonList;
    },

    menuClick (mdItem,mdIndex,floderIndex,floderItem) {
      this.activeComponent = mdItem.id;
      this.activeIndex = floderIndex + '-' + mdIndex;
      localStorage.setItem("activeComponent",this.activeComponent);
      localStorage.setItem("activeIndex",this.activeIndex);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<style lang="scss">
// // 父节点前面的图标
// .el-menu--horizontal>.el-submenu .el-submenu__title,
// .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
// .el-submenu__title i {
//   color: red;
// }

// // 父节点后面的图标
// .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
//   border-bottom: 2px solid #ff8923;
//   color: #f00;
// }

// // 父菜单鼠标悬浮/选中时的样式
// .el-menu--horizontal:focus,
// .el-menu--horizontal:hover,
// .el-submenu.is-active {
//   outline: 0 !important;
//   color: #f00 !important;
//   background: rgb(255, 218, 224) !important;
// }

// // 子菜单鼠标悬浮/选中时的样式
// .el-menu-item:focus,
// .el-menu-item:hover {
//   outline: 0 !important;
//   color: #f00 !important;
//   background: rgb(255, 218, 224) !important;
// }

// // 一级菜单选中的样式
// .el-menu-item.is-active {
//   color: #f00 !important;
//   border-bottom-color: transparent !important;
// }

// // 二级菜单 选中的样式
// .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
//   color: #ff8923 !important;
//   border-bottom-color: transparent !important;
// }

// // 主菜单鼠标悬浮/选中时的样式
// .el-submenu__title:focus,
// .el-submenu__title:hover {
//   outline: 0 !important;
//   color: #f00 !important;
//   background: pink !important;
// }

// .el-menu--horizontal:focus,
// .el-menu--horizontal:hover {
//   outline: 0 !important;
//   color: #fff !important;
//   background: pink !important;
// }

// .nav-menu-son .el-menu--horizontal:hover {
//   background: pink !important;
// }

// .el-menu {
//   background-color: none !important;
// }

// .el-menu-item a:hover {
//   background: none;
// }

// .el-menu--popup-bottom-start {
//   margin-top: -2px;
// }

// .el-menu--popup {
//   background: none !important;
//   padding: 0 0;
//   min-width: 120px !important;
//   line-height: 40px !important;
//   box-shadow: 0 4px 8px 0 rgba(25, 14, 109, 0.13);
//   border-radius: 5px;
// }

// .el-menu--horizontal .el-menu {
//   background: none;
// }

// .el-menu--horizontal .el-menu .el-menu-item,
// .el-menu--horizontal .el-menu .el-submenu__title {
//   background-color: rgba(255, 241, 241, 0.6);
//   float: none;
//   height: 36px;
//   line-height: 36px;
//   padding: 0 22px;
//   color: #929292 !important;
//   z-index: 100;
//   font-weight: 500;
// }

// //二次菜单悬浮及背景样式
// .el-menu--popup-bottom-start .el-menu-item:hover {
//   color: rgba(86, 86, 86, 1) !important;
// }

// .el-menu--popup-bottom-start .el-menu-item {
//   background: #fff !important;
// }

// el-menu-item在scoped中设置值是可以的，而el-submenu在scoped中设置值不起作用
// 设置了默认左边框为白色
.el-submenu .el-submenu__title {
  border-left: #fff solid 6px;
}

//设置鼠标悬停时el-submenu的样式
.el-submenu .el-submenu__title:hover {
  border-left: #33A2EF solid 6px !important;
  background-color: #E2EFF9 !important;
  color: #38B2FF !important;

  i {
    color: #38B2FF;
  }
}

// 设置鼠标悬停时el-submenu的样式
// .el-submenu.is-active {
//   border-left: #33A2EF solid 6px !important;
//   background-color: #E2EFF9 !important;
//   color: #38B2FF !important;
// }


// 设置了默认左边框为白色
.el-menu-item {
  border-left: #fff solid 6px;
}

// 设置鼠标悬停时el-menu-item的样式
.el-menu-item:hover {
  border-left: #33A2EF solid 6px !important;
  background-color: #E2EFF9 !important;
  color: #38B2FF !important;

  i {
    color: #38B2FF;
  }
}

// 设置选中el-menu-item时的样式
.el-menu-item.is-active {
  border-left: #33A2EF solid 6px !important;
  background-color: #E2EFF9 !important;
  color: #38B2FF !important;
}
</style>