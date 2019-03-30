<template>
  <div class="router-nav">
    <ul>
      <li v-for="(item, index) in routerPath.path" :key="index" @click="active = index" :style="item.class ? 'padding: 0;' : ''">
        <h4 v-if="item.title">
          <router-link v-if="item.router"
          :to="item.router"
          :class="active === index ? 'title-class active' : 'title-class'"
          >{{ item.title }}</router-link>
          <p class="title-class" v-else>{{ item.title }}</p>
        </h4>
        <p v-else-if="item.class">{{ item.class }}</p>
        <router-link v-else
          :to="item.router"
          :class="active === index ? 'active' : ''"
        >{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import routerPath from '@/router.json'
export default {
  data() {
    return {
      routerPath,
      active: 0
    }
  },
  methods:{
    // routerActive(index){
    //   this.active = index
    // }
  }
}
</script>
<style lang="scss" scoped>
.router-nav{
  li{
    padding: 12px 0;
    .title-class{
      font-size: 18px;
      font-weight: bolder;
    }
  }
  a{
    color: rgb(117, 117, 117);
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    &:hover,
    &:focus {
      color: mix(#fff, #409EFF, 20%);
    }

    &:active {
      color: mix(#000, #409EFF, 20%);
    }
  }
  .active{
    color: mix(#fff, #409EFF, 20%);
  }
}
</style>

