import Vue from 'vue'
import VueRouter from 'vue-router'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        count:0,
        color:'',
        user: null
    },
    mutations: {
        setCount:(state,c)=>state.count = c,
        bg:(state,style)=>state.color = style,
        setUser:(state, user)=>state.user = user,
    },
    getters: {
        getCount: (state) => {
            return ('Студентів: '+state.count)
        },
        getback: (state) => {
            return(state.color)
        },
        getUser: (state) => {
            return state.user
        }
    }
})
export default store;