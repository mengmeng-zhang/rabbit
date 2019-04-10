<template>
  <div id="app">
    <header-view></header-view>
    <div class="main">
      <routerNav></routerNav>
      <div class="router-content" :style="contentWidth">
        <r-row type="flex">
          <r-col class="r-col-6 no-padding">1111</r-col>
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
      contentWidth: 0
    }
  },
  methods: {
    getWidth () {
      let clientWidth = document.querySelector('.main')
      console.log(clientWidth)
      // console.log('width:' + Number(clientWidth) - 200 + 'px')
      this.contentWidth = 'width:' + clientWidth - 200 + 'px'
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
