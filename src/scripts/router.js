import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/aboutmember/LoginPage.vue'
import SerachPwdPage from '@/components/aboutmember/SerachPwdPage.vue'
import RegistrationMember from '@/components/aboutmember/RegistrationMember.vue'
import SerachIdPage from '@/components/aboutmember/SerachIdPage.vue'
import MyPage from '@/components/aboutmember/MyPage.vue'
import MyNotice from '@/components/aboutmember/MyNotice.vue'

import NoticePage from '@/components/aboutnotice/NoticePage.vue'
import InsertionNotice from '@/components/aboutnotice/InsertionNotice.vue'
import DetailNotice from '@/components/aboutnotice/DetailNotice.vue'
import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {path: '/', component:MainPage},
    {path: '/savemoney/mypage', component:MyPage, props: route => ({ memberId: route.query.memberId })},
    {path: '/savemoney/mynotice', component:MyNotice, props: route => ({ memberId: route.query.memberId })},
    {path: '/login', component:LoginPage},
    {path: '/registrationmember', component:RegistrationMember},
    {path: '/serachpwdpage', component:SerachPwdPage},
    {path: '/serachidpage', component:SerachIdPage},
    {path: '/noticepage', component:NoticePage},
    {path: '/insertionnotice', component:InsertionNotice},
    {path: '/detailnotice', component: DetailNotice, props: route => ({ boardid: route.query.boardid }) }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})



export default router