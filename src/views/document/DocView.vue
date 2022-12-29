<template>
  <div class="docs">
    <header-view></header-view>

    <div class="doc-main">

      <template>
        <el-row>
          <el-col :span="3">
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" unique-opened>
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
          </el-col>

          <el-col :span="21">
            <div class="markdown-body">
              <!-- 文章详情页面 -->
              <div class="details">
                <component :is="componentList[activeComponent]" class="markdown-body"></component>
              </div>
            </div>
          </el-col>
        </el-row>
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
@import "./index.scss"
</style>