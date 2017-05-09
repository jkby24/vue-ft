// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui'
import store from './store'
import 'mint-ui/lib/style.css'
import 'animate.css'
Vue.config.productionTip = false;
import Back from '@/components/Back';
Vue.component('back', Back);
Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});
router.push('/home')