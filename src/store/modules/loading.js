import * as types from '../mutation-types'

const state = {
    loading: false
}

const mutations = {
    [types.LOADING_SHOW](state) {
        state.loading = true
    },
    [types.LOADING_HIDE](state) {
        state.loading = false
    }
}

export default {
    state,
    mutations
}
