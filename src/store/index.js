import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as types from './mutation-types'
Vue.use(Vuex)



const state = {
    count: 0,
    totalCount: 0,
    todos: [
            { id: 1, text: '哈哈哈哈哈', done: true },
            { id: 2, text: '嘿嘿嘿嘿嘿', done: false },
        ],
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    // mutations: {
    //     increment(state,payload) {
    //         state.count += payload.amount
    //     },
    // }
})