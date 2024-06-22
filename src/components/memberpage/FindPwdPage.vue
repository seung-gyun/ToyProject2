<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
    <div class="form-floating">       
        <input type="text" class="form-control" id="memberId" name="memberId" ref="memberIdInput" v-model="state.members.memberId"
        @keyup.enter="submit()">

        <label for="floatingInput">ID</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="email" name="memberId" ref="emailInput" v-model="state.members.email"
        @keyup.enter="submit()">
        <label for="floatingPassword">My-Email</label>
      </div>
      <br>
      <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Send to My E-mail</button>
      
  </div>
  <hr class="my-4">
</template>

<script>
import axios from 'axios';
import { reactive} from 'vue';

// import axios from 'axios';
// import { reactive } from 'vue';

export default {
  
  name : 'LoginPage',

  setup(){

    const state = reactive({
      members : {
        memberId : "",
        email : "",
      }
    })


   
    const submit = ()=>{

      if (!state.members.memberId) {
        alert('아이디를 입력하세요');
        return;
      }

      if (!state.members.email) {
        alert('이메일을 입력하세요');
        return;
      }

      axios.get("/savemoney/findpwd", {params: state.members}).then((res) => {

        
        console.log(res);


      }).catch(error =>{
        console.error("error", error);
      })

    }

    return {state, submit}


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