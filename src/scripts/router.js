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
import store from './store'



const routes = [
    {path: '/', component:MainPage},
    {path: '/mypage', component:MyPage, props: route => ({ memberId: route.query.memberId })},
    {path: '/mynotice', component:MyNotice, props: route => ({ memberId: route.query.memberId, currentPage : route.query.currentPage })},
    {path: '/login', component:LoginPage},
    {path: '/registrationmember', component:RegistrationMember},
    {path: '/serachpwdpage', component:SerachPwdPage},
    {path: '/serachidpage', component:SerachIdPage},
    {path: '/noticepage', component:NoticePage, props: route => ({ currentPage : route.query.currentPage })},
    {path: '/insertionnotice', component:InsertionNotice},
    {path: '/detailnotice', component: DetailNotice, props: route => ({ boardid: route.query.boardid }) }

]

const router = createRouter({

    history:createWebHistory(),
    routes

})

// 전역 가드 설정
router.beforeEach((to, from, next) => {

    const isAuthenticated = Boolean(store.state.account.memberId);
    const AuthenticatedList = ['/mynotice', '/mypage'];
    
    if (AuthenticatedList.includes(to.path)) {
        if (!isAuthenticated) {
            // 인증되지 않은 경우 로그인 페이지로 리디렉션
            alert("로그인이 필요한 페이지입니다.");
            next({ path: '/login' });
        } else {
            next(); // 인증된 경우 이동 허용
        }
    } else {
        next(); // 다른 경로는 모두 이동 허용
    }
});


export default router