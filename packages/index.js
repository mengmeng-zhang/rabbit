import Vue from 'vue'
import RButton from '~/button';
import MetaInfo from '~/meta-info'
const components = [
    RButton
]

const install = function(Vue, opts = {}){
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    // MetaInfo.use(Vue)
}

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// };
install(Vue)

export default {
    version: '1.0.0',
    RButton
}