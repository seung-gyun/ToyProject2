import axios from 'axios';
import router from './router';


// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: '/savemoney/', // 기본 URL 설정
});

// Response Interceptor: 요청 성공 후 실행됨
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 공통적인 에러 처리
        if (error.response.status === 401) { // 예시: Unauthorized 에러 처리
            alert("로그인이 필요한 화면입니다.");
            router.push("/login");
        }
        else if(error.response.status === 403){
            alert("권한이 없습니다.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;