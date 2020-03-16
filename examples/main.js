import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

import demoBlock from './components/demo-block.vue';

import VueComponentLib from '../packages';

Vue.config.productionTip = false;
Vue.component('demo-block', demoBlock);

Vue.use(VueComponentLib);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
