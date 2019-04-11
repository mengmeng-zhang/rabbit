export default {
    name: 'RCol',
    componentName: 'RCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        type: String
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
                'r-col'
            ],
            style: this.style
        }, this.$slots.default)
    }
}