<template>
    <button class="ra--button"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="type"
    :class="[
        type ? 'ra--button--' + type : '',
        {
            'is--disabled': disabled
        }
    ]">
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
            default: 'button'
        }
    },
    data(){
        return {
            loading: true
        }
    }
}
</script>