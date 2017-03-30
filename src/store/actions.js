import * as types from './mutation-types'

export default {
    addCount({commit},plan) {
        commit(types.ADD_COUNT,plan)
    },

    showAsync({commit}) {
        setTimeout(() => {
            commit(types.SHOW_ASYNCE)
        }, 1000);
    }
}