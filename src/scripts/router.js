import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component:MainPage},
    {path: '/login', component:LoginPage},

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router