<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
        <form @submit.prevent="submit" class="needs-validation" novalidate>
      <div class="form-floating">
        <input type="text" class="form-control" id="username" name="username" v-model="state.members.memberId" required>
        <label for="memberId">ID</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password" name="password" v-model="state.members.password" required>
        <label for="password">Password</label>
      </div>
      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      <!-- <button type="submit" class="btn btn-primary">Login</button> -->
    </form><br>
      <div class="msg">
        {{ msgState.msg }}
      </div>
      <div class="form-check text-start my-3">
        <label class="form-check-label" for="flexCheckDefault">
          <router-link to="/joinmember">회원가입</router-link>&nbsp;&nbsp;
          <router-link to="/findIdPage">아이디 찾기</router-link>&nbsp;&nbsp;
          <router-link to="/findPwdPage">비밀번호 찾기</router-link>&nbsp;&nbsp;
        </label>
      </div>
      
  </div>
  <hr class="my-4">
</template>

<script>
import store from '@/scripts/store';
import { reactive } from 'vue';
import axios from 'axios';
import router from '@/scripts/router';

export default {
  
  name : 'LoginPage',

  setup(){

    // const router = useRouter();

    const state = reactive({
      members : {
        memberId : "",
        password : "",
      }
    })

    const msgState = reactive({
      reponsemsg : {
        msg : ""
      }
    })
   
    const submit = ()=>{

      if (!state.members.memberId) {
        alert('아이디를 입력하시오.');
        return;
      }

      if (!state.members.password) {
        alert('비밀번호를 입력하세요');
        return;
      }

      axios.post("/savemoney/login", { username: state.members.memberId, password : state.members.password }).then(({data}) => {


          //store값에 저장하겠다.  //성공했을 시 username그대로 등록
          store.commit('setAccount', data.username||0);
          sessionStorage.setItem("id",data.username);

          if(data.redirectUrl==""){
            router.push('/');
          }else if(data.redirectUrl=="/board"){

            router.push('/noticePage');
            
          }else{
            msgState.msg = "입력하신 정보가 맞지 않습니다.";
          }
            
        

      }).catch(error =>{
        console.error("error", error);
      })

    }

    return {state, submit, msgState}


  }

}
</script>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 500px;
  padding: 5rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-check{
  padding-left : 0px;
}


</style>