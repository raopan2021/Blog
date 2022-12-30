<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NProgress from "nprogress"; // 导入nprogress
// 因为在main.js 中已经导入样式，这里不需要再次导入样式
// 但是NProgress还是需要导入！

export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {//使用watch 监听$router的变化
    // 页面跳转动画
    $route (to,from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  },
  mounted () {
    window.addEventListener("scroll",this.handleScroll); // 监听滚动条事件
  },
  methods: {
    handleScroll () {
      // 屏幕剩余的高度
      let surplus =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // 当前滑动高度
      let scrollY = document.documentElement.scrollTop;
      // 当前位置百分比小数
      let coorY = scrollY / surplus;
      // 设置导航栏，这里使用NProgress.set() 动态更改进度条
      NProgress.set(coorY);
    }
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
}

::-webkit-scrollbar {
  display: none;
}

::deep .el-menu {
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
}
</style>