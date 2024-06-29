<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"></p>
    <div class="form-floating">
      <ul>
        <!-- Header row for column names -->
        <li class="board-header member">
          <span class="board-info-header memberId">작성자</span>
        </li>

        <li class="board-item">
          <input type="text" class="board-info" readonly="readonly" v-model="store.state.account.memberId">
        </li>

        <li class="board-header">
          <span class="board-info-header memberid" >제목</span>
        </li>

        <li class="board-item">
          <input type="text" class="board-info" v-model="notice.title" >
        </li>
   
        <li class="board-header">
          <textarea class="board-info" v-model="notice.content"></textarea>
        </li>

        

      </ul>
      <button class="btn btn-primary w-100 py-2" @click.prevent="registerNotice()">Register notice</button>
    </div>

    <!-- <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Find-Id</button> -->

  </div>
  <hr class="my-4">
</template>

<script>

import router from '@/scripts/router';
import axios from 'axios';
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'InsertNotice',
  setup() {
    // Vue 3 Composition API setup
    
    const notice = reactive({
      memberId : '',
      title : '',
      content : ''
    });

    const store = useStore();

    const registerNotice =()=>{

      alert("test");

    notice.memberId = store.state.account.memberId;

    axios.post("/savemoney/registernotice", { memberId: notice.memberId, title: notice.title, content: notice.content}).then(()=>{

      alert("test");

      router.push("/noticePage");

    })

}

    return {store, registerNotice, notice};

  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 1000px;
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

li{
  padding : 10px;
}

.board-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0; /* 헤더의 배경색 설정 */
  border-bottom: 1px solid #ccc; /* 하단 테두리 추가 */
}

.board-info-header {
  flex: 1; /* 각 셀을 동일하게 넓게 설정 */
  text-align: center; /* 텍스트 가운데 정렬 */
  font-weight: bold; /* 헤더 텍스트 굵게 설정 */
}

.board-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc; /* 데이터 행의 하단 테두리 추가 */
}

.board-info {
  flex: 1; /* 각 데이터 셀을 동일하게 넓게 설정 */
  text-align: left; /* 데이터 텍스트 가운데 정렬 */
}

textarea{
  height: 500px;
}

</style>