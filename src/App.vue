<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route (to,from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/reset.css"; // 清除浏览器默认的样式
// @import "@/assets/pageTransition.css"; // 页面跳转动画

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

// 页面跳转动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>