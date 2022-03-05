// 该文件用于创建vuex中最核心的store
import Vue from "vue"

// 引入并注册vuex中间件，然后vm和vc上都会有$store了，用于全局数据管理 
import Vuex from 'vuex'
Vue.use(Vuex)

// 求和相关配置
const countOptions = {
    namespaced: true,
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value 
        }
    },
    state: {
        sum: 0 
    },
    getters: {
        bigSum(state) {
            return state.sum * 10 
        }
    }
}
// 人员管理相关配置 
const personOptions = {
    namespaced: true,
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value 
        }
    },
    state: {
        sum: 0 
    },
    getters: {
        bigSum(state) {
            return state.sum * 10 
        }
    }
}


export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
}) 



