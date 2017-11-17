import EventBus from './EventBus'

const LoadingListenerKey = 'LOADINGLISTENERKEY'
class LoadingListener {
    /**
     * 添加监听
     * @param {function} fn 
     */
    addLoadingListener(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Error typeof AuthExpiredListener must be function')
        }
        EventBus.instance.on(fn, LoadingListenerKey)
    }
    /**
     * 触发事件
     * @param {*} data 
     */
    emitLoadingListener(data) {
        EventBus.instance.emit(data, LoadingListenerKey)
    }
    /**
     * 销毁监听
     * @param {*} data 
     */
    dispatchLoadingListener(data) {
        EventBus.instance.emit(LoadingListenerKey, data)
    }
}

export default new LoadingListener()
