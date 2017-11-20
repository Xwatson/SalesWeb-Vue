import Vue from 'vue'
import Router from 'vue-router'
import CoreLayout from '../layouts/CoreLayout'
import LoginLayout from '../layouts/LoginLayout'

const Home = r => require.ensure([], () => r(require('../pages/Home')), 'Home')
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: CoreLayout,
            children: [
                {
                    path: '',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    component: Home
                }
            ]
        },
        {
            path: 'login',
            component: LoginLayout,
            children: [
                {
                    path: '/login',
                    component: Login
                }
            ]
        }
    ]
})
