<template>
    <button class="ra--button" :disabled="disabled"
    :class="[
        type ? 'ra--button--' + type : '',
        disabled ? 'is--disabled-' + type : ''
    ]"
    @click="buttonHandleClick">
        <slot></slot>
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
        }
    },
    data(){
        return {
            loading: true
        }
    },
    methods: {
      buttonHandleClick(){
        console.log(1)
      }
    }
}
</script>
