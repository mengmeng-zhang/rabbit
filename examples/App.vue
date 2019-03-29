<template>
  <div id="app">
    <RButton disabled>默认按钮</RButton>
    <RButton type="primary" disabled>主要按钮</RButton>
    <RButton type="success" disabled>主要按钮</RButton>
    <RButton type="info" disabled>主要按钮</RButton>
    <RButton type="warning" disabled>主要按钮</RButton>
    <RButton type="danger" disabled>主要按钮</RButton>

    <RIcon name="user-circle-o" :styles="{'font-size': '20px', color: 'red'}"></RIcon>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>

</style>
