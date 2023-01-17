<template>
  <div class="resume">
    <div class="introduction">
      <div class="head">
        <img src="@/assets/images/myPhoto.jpg" alt="我的照片">
      </div>

      <div class="want">
        <span>求职意向：前端开发工程师</span>
      </div>

      <div class="Item">
        <div class="item" v-for="(item, index) in myItem">
          <div class="key">
            <span>{{ item.key }}</span>
            <i :class="item.icon"></i>
          </div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>

      <div class="layout"><span>基于vue2 + vue-markdown-loader制作</span></div>
    </div>

    <div class="doc-main">
      <!-- 文章详情页面 -->
      <div class="details">
        <resume-view class="markdown-body" v-highlight></resume-view>
      </div>
    </div>


    <el-backtop>
      <div class="up">UP</div>
    </el-backtop>

  </div>
</template>

<script>
import ResumeView from './resume.md';

export default {
  data () {
    return {
      myItem: [
        { key: "姓名",value: "饶盼",icon: "el-icon-user" },
        { key: "电话",value: "+86 13371212480",icon: "el-icon-phone-outline" },
        { key: "邮箱",value: "raopan2021@outlook.com",icon: "el-icon-receiving" },
        { key: "生日",value: "1995-09-15",icon: "el-icon-present" },
        { key: "毕业院校",value: "湖北汽车工业学院",icon: "el-icon-school" },
      ]
    }
  },
  components: {
    ResumeView,
  },
  mounted () {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>