<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
        <form @submit.prevent="submit" class="needs-validation" novalidate>
      <div class="form-floating">
        <input type="text" class="form-control" id="username" name="username" v-model="state.member.memberId" required readonly="readonly">
        <label for="memberId">ID</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password" v-model="state.member.memberPwd" name="password" required>
        <label for="password">Password</label>
      </div>
      <button @click.prevent="updateMember()" class="btn btn-primary w-100 py-2" type="submit">Update Member</button><br/><br/>
      <button @click.prevent="unregisterMember()" class="btn btn-primary w-100 py-2" type="submit">Member Unregister</button>
      <!-- <button type="submit" class="btn btn-primary">Login</button> -->
    </form><br>
      <div class="msg">
        {{ msgState.msg }}
      </div>
      
  </div>
  <hr class="my-4">
</template>

<script>
import router from '@/scripts/router';
import store from '@/scripts/store';
import axios from 'axios';
import { reactive } from 'vue';

export default {
  
  name : 'MyPage',
  props: {
    memberId: {
      type: String,
      required: true
    }
  },
  setup(props){

    const msgState = reactive({
      msg:""
    });

    const state = reactive({
      member : {
        memberId : props.memberId,
        memberPwd : ""
      }
      
    });

    const unregisterMember = () =>{

      if(confirm("정말 삭제하시겠습니까?\n삭제 시 복구 불가능합니다."))
        axios.delete("/savemoney/mypage/memberdelete="+state.member.memberId).then(()=>{
           
          store.commit('setAccount', 0); // meberId 없애기
          sessionStorage.removeItem("id"); // id 없애기
          router.push("/");
          
          router.push("/");
        })
        .catch((error) => {

          console.error(error);

        })

    }

    const updateMember = () =>{

      axios.patch("/savemoney/mypage/id="+state.member.memberId ,state.member).then(()=>{

      msgState.msg = "비밀번호 변경이 완료되었습니다.";

    })
    .catch((error) => {

      console.error(error);

    })

    }

    return {store, state,msgState, updateMember, unregisterMember}

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