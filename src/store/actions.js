import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
    commit(types.CALL_API, {
        types: [ types.GET_GOODS_API, types.GET_GOODS_API_FAIL ],
        endpoint: '/aaa',
        options: { body: {}, method: 'GET' }
    })
}
