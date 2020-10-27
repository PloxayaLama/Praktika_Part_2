import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js'

import Students from './components/Students.vue'
import studentInfo from './components/studentInfo.vue'

import Vuex from 'vuex';



const routes = [
   { path: '/', component: Students },
   { path: '/student-info/:id', component: studentInfo, props: true},
]

const router = new VueRouter({
   routes
})

Vue.use(VueRouter, VueAxios, axios)
Vue.use(Vuex)

new Vue({
   render: h => h(App),
   el: '#app',
   router,
   store
})
