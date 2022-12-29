<template>
  <div class="docs">
    <header-view></header-view>

    <div class="doc-main">

      <div class="markdown-body">
        <!-- 文章详情页面 -->
        <div class="details">
          <readme-view class="markdown-body"></readme-view>
        </div>
      </div>
      <el-backtop>
        <div class="up">UP</div>
      </el-backtop>

    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/Header.vue";
import ReadmeView from '@/../README.md';

export default {
  data () {
    return {
    }
  },
  components: {
    HeaderView,
    ReadmeView
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