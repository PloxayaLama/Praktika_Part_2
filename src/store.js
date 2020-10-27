import Vue from 'vue'
import VueRouter from 'vue-router'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        count:0,
        color:''
    },
    mutations: {
        setCount:(state,c)=>state.count=c,
        bg:(state,style)=>state.color=style,
    },
    getters: {
        getCount:(state)=>
        {
            return ('Кількісь студентів = '+state.count)
        },
        getback:(state)=>{
            return(state.color)
        }
    }
})
export default store;