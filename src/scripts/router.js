import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/memberpage/LoginPage.vue'
import FindPwdPage from '@/components/memberpage/FindPwdPage.vue'
import JoinMemberPage from '@/components/memberpage/JoinMemberPage.vue'
import FindIdPage from '@/components/memberpage/FindIdPage.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {path: '/', component:MainPage},
    {path: '/login', component:LoginPage},
    {path: '/joinmember', component:JoinMemberPage},
    {path: '/findPwdPage', component:FindPwdPage},
    {path: '/findIdPage', component:FindIdPage},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router