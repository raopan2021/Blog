<template>
  <div class="home">
    <header-view></header-view>

    <div class="poem">

      <!-- 一句诗词 -->
      <transition enter-active-class="animate__animated animate__zoomInLeft"
        leave-active-class="animate__animated animate__zoomOutLeft">
        <div class="onePoem" v-if="!isFullPoem" @click="isFullPoem = !isFullPoem">
          <el-card class="box-card" shadow="never" id="card">
            <span>{{ poem.content }}</span>
          </el-card>
        </div>
      </transition>

      <!-- 整首诗词 -->
      <transition enter-active-class="animate__animated animate__zoomInLeft"
        leave-active-class="animate__animated animate__zoomOutLeft">
        <div class="fullPoem" v-if="isFullPoem" @click="isFullPoem = !isFullPoem">
          <div class="fullPoem-head">
            <span class="fullPoem-title">{{ poem.origin.title }}</span>
            <br>
            <span>{{ poem.origin.dynasty }} -</span>
            <span>{{ poem.origin.author }}</span>
          </div>
          <div v-for="(item, index) in poem.origin.content" :key="index" class="fullPoem-content">
            <span class="fullPoem-item">{{ item }}</span>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/Header.vue";

export default {
  name: 'HomeView',
  components: {
    HeaderView
  },
  data () {
    return {
      poem: "",
      isFullPoem: false, // 是否展示整首诗词
    }
  },
  mounted () {
    this.getPoem()
  },
  methods: {
    getPoem () {
      const poemApi = require('jinrishici');
      poemApi.load(result => {
        this.poem = result.data
      });
    }
  },
}
</script>

<style lang="scss"scoped>
@import "./index.scss";

.home {
  background: url("https://api.paugram.com/wallpaper/?category=cn");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
