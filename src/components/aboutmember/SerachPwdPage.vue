<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
    <div class="form-floating">       
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="memberId" name="memberId" v-model = "state.form.memberId"
        @keyup.enter="submit()">
        <label for="floatingPassword">Id</label>
      </div>
      
      <div class="form-floating">
        <input type="text" class="form-control" id="email" name="email" v-model = "state.form.email"
        @keyup.enter="submit()">
        <label for="floatingInput">Email</label>
      </div>
      <div class="msg">
        {{ msgState.msg }}
      </div>

      <div class="form-check text-start my-3">
        <label class="form-check-label" for="flexCheckDefault">
          <router-link to="/registrationmember">회원가입</router-link>&nbsp;&nbsp;
          <router-link to="/serachidpage">아이디 찾기</router-link>&nbsp;&nbsp;
          <router-link to="/">홈으로</router-link>&nbsp;&nbsp;
        </label>
      </div>
      <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Reset-Pwd</button>
      
  </div>
  <hr class="my-4">
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';


// import axios from 'axios';
// import { reactive } from 'vue';

export default {
  name: 'FindIdPage',
  setup() {
    // 반응적 상태 생성
    const state = reactive({
      form: {
        memberId: '',
        email: '',
      }
    });

    const msgState = reactive({
      reponsemsg : {
        msg : ""
      }
    })

    // submit 함수 정의
    const submit = () => {
      axios.get("/savemoney/findPwd", { params: state.form })
        .then(({ data }) => {
          if(data!=0){
           
            msgState.msg = "초기화된 비밀번호는 " + data + "입니다.";

          }else{

            msgState.msg = "회원정보가 일치하지 않습니다.";

          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    // setup 함수에서 상태와 메소드를 반환
    return { state, submit, msgState};
  }
};
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

.msg{
  color : red;
}

</style>