<template>
    <button class="ra--button" :disabled="disabled"
    :class="[
        type ? 'ra--button--' + type : '',
        plain ? 'is--plain-' + type : '',
        round ? 'is--round' : '',
        circle ? 'is--circle' : '',
        disabled ? isDisabled() : ''
    ]"
    @click="buttonHandleClick">
        <span>
          <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'RButton',
    props: {
        disabled: Boolean,
        autofocus: Boolean,
        type: {
          type: String,
          default: ''
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean
    },
    data(){
        return {
            loading: true
        }
    },
    methods: {
      buttonHandleClick(){
        console.log(1)
      },
      isDisabled(){
        if(this.plain){
          return 'is--disabled-plain-' + this.type
        }
        return 'is--disabled-' + this.type
      }
    }
}
</script>
