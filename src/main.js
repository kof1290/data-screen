import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import PubSub from 'pubsub-js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '../element-variables.scss'
import components from '@/components/pool/'
import '@/style/index.scss'
Vue.config.productionTip = false
Vue.prototype.pubsub = PubSub;
Vue.use(components)
Vue.use(ElementUI)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")