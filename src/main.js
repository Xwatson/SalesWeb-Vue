// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './templates/App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': require('./lang/zh'),
        'en-US': require('./lang/en')
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    store,
    router,
    template: '<App/>',
    components: { App }
})
