<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"> ※ Press Your Id  &  PassWord  </p>  
    <div class="form-floating">       
        <input type="email" class="form-control" id="floatingInput">

        <label for="floatingInput">ID</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button @click="test()" class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

// import axios from 'axios';
// import { reactive } from 'vue';

export default {
  
  name : 'LoginPage',

  setup(){

    const state = reactive({
      items : []
    })

    axios.get("/savemoney").then((data) => {

      alert(data);

      state.items = data;

    }).catch(error =>{
      console.error("error", error);
    })

    return {state}


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



</style>