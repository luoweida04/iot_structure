import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => import('./views/login')
const home = () => import('./views/home')

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
    ]
})
export default router;