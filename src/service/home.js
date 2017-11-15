import fetch from '../utils/HttpFetch'

export const getGoods = () => fetch('/getGoods', {
    body: {},
    method: 'GET'
})
