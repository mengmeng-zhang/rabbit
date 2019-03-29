<template>
  <i :class="'fa fa-' + name" :style="fontStyle"></i>
</template>
<script>
export default {
  name: 'RIcon',
  props: {
    name: String,
    styles: Object
  },
  data(){
    return {
      fontStyle: ''
    }
  },
  watch: {
    styles(newValue){
      if(newValue && typeof newValue === 'object'){
        for(let item in newValue){
          this.fontStyle += `${item}: ${newValue[item]};`
        }
        // this.fontStyle = ''
      }
    }
  }
}
</script>
