import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/aboutmember/LoginPage.vue'
import FindPwdPage from '@/components/aboutmember/FindPwdPage.vue'
import JoinMemberPage from '@/components/aboutmember/JoinMemberPage.vue'
import FindIdPage from '@/components/aboutmember/FindIdPage.vue'

import NoticePage from '@/components/aboutnotice/NoticePage.vue'
import InsertNotice from '@/components/aboutnotice/InsertNotice.vue'
import DetailNotice from '@/components/aboutnotice/DetailNotice.vue'
import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {path: '/', component:MainPage},
    {path: '/login', component:LoginPage},
    {path: '/joinmember', component:JoinMemberPage},
    {path: '/findPwdPage', component:FindPwdPage},
    {path: '/findIdPage', component:FindIdPage},
    {path: '/noticePage', component:NoticePage},
    {path: '/insertNotice', component:InsertNotice},
    { path: '/detailNotice', component: DetailNotice, props: route => ({ boardid: route.query.boardid }) }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})



export default router