import 'api/resource'
import Vue from 'vue'
import App from 'pages/App.vue'
import {connect} from './utils/ws'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@babel/polyfill'
import store from 'store/store'

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    render: a => a(App),
    vuetify: new Vuetify({}),
})