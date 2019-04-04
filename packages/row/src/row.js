export default {
    name: 'RRow',
    componentName: 'RRow',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        type: String,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'top'
        },
        gutter: Number
        // style: Object,
    },
    computed: {
        style(){
            const sty = {}
            return sty
        }
    },
    render(h){
        return h(this.tag, {
            class: [
                'r-row',
                this.justify === 'start' ? '' : `is-justify-${this.justify}`,
                this.align === 'top' ? '' : `is-align-${this.align}`,
                {'r-row--flex': this.type === 'flex'}
            ],
            style: this.style
        }, this.$slots.default)
    }
}