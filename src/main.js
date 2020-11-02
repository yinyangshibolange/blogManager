import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import Router from 'vue-router'
import router from './router'
import store from './store'

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
