<template>
  <div class="about">
    <header-view></header-view>

    <div class="doc-main">

      <!-- 文章详情页面 -->
      <div class="details">
        <readme-view class="markdown-body" v-highlight></readme-view>
      </div>
    </div>

    <el-backtop>
      <div class="up">UP</div>
    </el-backtop>

    <!-- <audio-view></audio-view> -->
  </div>
</template>

<script>
// 加载樱花飘落的特效
// import "@/utils/specialEfficiency/sakura.js";

import HeaderView from "@/components/Header.vue";
import ReadmeView from '@/../README.md';
// import AudioView from '@/components/AudioView.vue';

export default {
  data () {
    return {
    }
  },
  components: {
    HeaderView,
    ReadmeView,
    // AudioView
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