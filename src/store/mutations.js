import * as types from './mutation-types'
export default {
    [types.ADD_COUNT](state,plan) {
        state.totalCount += plan.amount
    },

    [types.SHOW_ASYNCE](state) {
        state.count +=2 
    }
}