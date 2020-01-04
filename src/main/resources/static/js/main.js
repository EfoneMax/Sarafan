import 'api/resource'
import Vue from 'vue'
import App from 'pages/App.vue'
import {connect} from './utils/ws'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

if (frontendData.profile) {
    connect()
}


Vue.use(Vuetify, {
    iconfont: 'mdiSvg'
})

new Vue({
    el: '#app',
    render: a => a(App),
    vuetify: new Vuetify({}),
})