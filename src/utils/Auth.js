
import EventBus from './EventBus'
import Encrypt from './Encrypt'
class Auth {
    constructor() {
        this.authTokenKey = 'TOKEN_KEY'
        this.secretKey = 'xxxxxxxxx'
    }
    isAuth() {
        return !!this.getAuthToken()
    }
    isLogin() {
        let account = this.getAccount()
        return account && account.id && !this.isExpired(account)
    }

    isExpired(account) {
        if (!account) {
            account = this.getAccount()
        }
        if (account && account.authToken && account.expireTime) {
            return account.expireTime < Date.now()
        }
        return true
    }

    loginOut() {
        this.storeAccount(undefined)
    }

    login(account) {
        if (account && account.authToken) {
            let now = new Date()
            let expireTime = account.expireTime && Number.isSafeInteger(account.expireTime) ? Number(account.expireTime) : 0
            account.expireTime = now.setTime(now.getTime() + expireTime)
            this.storeAccount(account)
        }
    }

    storeAccount(account) {
        if (account && account.authToken) {
            let accountJsonString = JSON.stringify(account)
            localStorage.setItem(this.authTokenKey, Encrypt.encrypt(accountJsonString, this.secretKey))
            sessionStorage.setItem(this.authTokenKey, Encrypt.encrypt(accountJsonString, this.secretKey))
        } else {
            localStorage.removeItem(this.authTokenKey)
            sessionStorage.removeItem(this.authTokenKey)
        }
    }

    getAccount() {
        let encryptedAccount = localStorage.getItem(this.authTokenKey)
        if (encryptedAccount === null || !encryptedAccount) {
            encryptedAccount = sessionStorage.getItem(this.authTokenKey)
            if (encryptedAccount) {
                localStorage.setItem(this.authTokenKey, encryptedAccount)
            }
        }
        if (encryptedAccount) {
            let account = JSON.parse(Encrypt.decrypt(encryptedAccount, this.secretKey))
            return account
        } else {
            return undefined
        }
    }

    getMobile() {
        const account = this.getAccount()
        return account && account.mobile ? account.mobile : ''
    }

    getAuthToken() {
        let account = this.getAccount()
        if (account && account.authToken) {
            return account.authToken
        } else {
            return undefined
        }
    }
    addAuthExpiredListener(fn) {
        if (typeof fn !== 'function') {
            throw new Error('Error typeof AuthExpiredListener must be function')
        }
        EventBus.instance.on(fn, 'AUTH_EXPIRED_ACTION')
    }

    dispatchAuthExpiredAction() {
        EventBus.instance.dispatch('AUTH_EXPIRED_ACTION', { url:'/login' })
    }

}
export default new Auth()
