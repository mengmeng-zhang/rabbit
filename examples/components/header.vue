<template>
  <div>
    <div class="logo">
      <img :src="logo" alt>
      <div class="logo-detalis">
        this is Vue2.0 UI Toolkit for Web
      </div>
    </div>
  </div>
</template>
<script>
import rabbitImg from '@/assets/image/rabbit.png'
export default {
  data () {
    return {
      logo: rabbitImg
    }
  }
}
</script>
<style lang="scss" scoped>
.logo{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  .logo-detalis{
    font-size: 30px;
    color: #66b1ff;
  }
  img{
    width: 150px;
  }
}
</style>
