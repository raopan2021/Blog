<template>
  <div class="head">
    <div class="headRouter">
      <div :class="activeindex == item.id ? 'activeComponent grid-content' : 'grid-content'" v-for="item in routeList"
        :key="item.id" @click="click(item.route, item.id)">
        <i :class="item.icon"></i>
        <span v-if="item.route">{{ item.name }}</span>
        <span v-else>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-view",
  data () {
    return {
      activeindex: null,
      activeComponent: "",
      routeList: [
        { name: '首页',route: '/home',id: 0,icon: "el-icon-house" },
        { name: '我的技术文档',route: '/docs',id: 1,icon: "el-icon-notebook-2" },
        { name: 'gitee',id: 2,icon: "el-icon-position" },
        { name: '关于',route: '/about',id: 3,icon: "el-icon-location-outline" },
      ]
    }
  },
  mounted () {
    this.activeindex = sessionStorage.getItem("activeRoute");
  },
  methods: {
    click (route,index) {
      if (route) {
        this.$router.push({ path: route });
        this.activeindex = index;
        sessionStorage.setItem("activeRoute",this.activeindex)
      } else {
        window.open("https://gitee.com/raopan2021/blog");
      }
    }
  },
}
</script>

<style lang="scss">
.head {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: transparent;
  z-index: 1500;
}

.headRouter {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .grid-content {
    flex: 1;
    font-size: 20px;
    height: 100px;
    line-height: 100%;
    border-radius: 0;
    min-height: 36px;
    cursor: pointer;
    opacity: .5;
    text-align: center;

    i {
      color: #1989fa;
      margin-right: 15px;
    }

    span {
      display: inline-block;
      height: 100px;
      height: 100%;
      line-height: 100px;
      color: #1989fa;
    }
  }

  .grid-content:hover {
    background-color: rgba(150, 173, 206, .2);
  }

  .activeComponent {
    opacity: 1;
    background-color: rgba(150, 173, 206, .2);
  }
}
</style>