<template>
  <div id="app">
    <header-view></header-view>
    <div class="main">
      <routerNav></routerNav>
      <div class="router-content" :style="contentWidth">
        <r-row type="flex">
          <r-col class="r-col-6 no-padding">1111</r-col>
          <r-button @click="openWindow('url1')"> 跳转一</r-button>
          <r-button @click="openWindow('url2')"> 跳转二</r-button>
        </r-row>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import headerView from '@/components/header'
import routerPath from '@/router.json.js'
import routerNav from '@/components/routerNav'
import config from '@/utils/app.config'
export default {
  name: 'App',
  components: {
    headerView,
    routerNav
  },
  data(){
    return {
      routerPath,
      active: '',
      contentWidth: 0,
      url1: 'https://hyv0sy.axshare.com/#g=1&p=%E9%85%8D%E7%BD%AE%E6%9D%83%E9%99%90',
      url2: 'http://10.13.225.133/zh-cn/price/calculator/pass/MySQL-Cluster/'
    }
  },
  methods: {
    getWidth () {
      let clientWidth = document.querySelector('.main')
      this.contentWidth = 'width:' + clientWidth - 200 + 'px'
    },
    openWindow(type){
      console.log(window.menubar.visible)
      if(!type){
        return
      }
      // window.open(this[type], config.WINDOW_NAME)
    }
  },
  mounted(){
    this.getWidth()
  }
}
</script>
<style lang="scss" scoped>
#app {
  width: 1200px;
  margin: 0 auto;
}
.main{
  width: 100%;
  display: flex;
  justify-content: left;
  .router-nav{
    width: 200px
  }
}
.router-content{
  padding: 20px;
  width: 1000px;
  &:-webkit-scrollbar{
    width: 10px;
    height: 1px;
  }
  &:-webkit-scrollbar-thumb {
        border-radius:5px;
        width:6px;
        background:#b4bccc;
    }
  &:-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
}
</style>
