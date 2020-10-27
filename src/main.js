import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js'
import login from './components/login.vue'

import Students from './components/Students.vue'
import studentInfo from './components/studentInfo.vue'

import Vuex from 'vuex';



const routes = [
   { path: '/', component: Students, meta: {requiresAuth: true } },
   { path: '/student-info/:id', component: studentInfo, props: true, meta: {requiresAuth: true } },
   { path: '/login', component: login},
]

const router = new VueRouter({
   routes
})

router.beforeEach((to,from,next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
         if (store.getters.getUser === null) {
            next({
               path: '/login',
               query: {redirect: to.fullPath}
            })
         } 
         else{
            next()
         }
      }
      else{
         next()
      }
})

Vue.use(VueRouter, VueAxios, axios)
Vue.use(Vuex)

new Vue({
   render: h => h(App),
   el: '#app',
   router,
   store
})
