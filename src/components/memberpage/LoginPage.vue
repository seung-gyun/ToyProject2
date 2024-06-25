<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
    <div class="form-floating">       
        <input type="text" class="form-control" id="memberId" name="memberId" ref="memberIdInput" v-model="state.members.memberId" @keyup.enter="submit()">

        <label for="floatingInput">ID</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password" name="password" ref="passwordInput" v-model="state.members.password"
        @keyup.enter="submit()">
        <label for="floatingPassword">Password</label>
      </div>
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
      <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      
  </div>
  <hr class="my-4">
</template>

<script>
import store from '@/scripts/store';
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


// import axios from 'axios';
// import { reactive } from 'vue';

export default {
  
  name : 'LoginPage',

  setup(){

    const router = useRouter();

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

      axios.post("/savemoney/login", state.members).then((response) => {

        if(response.data.msg == null){ // 로그인 성공

          //store값에 저장하겠다.
          store.commit('setAccount', response.data.memberId);
          sessionStorage.setItem("id",response.data.memberId);

           router.push('/');
           
        }
        else{
          msgState.msg = response.data.msg;
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