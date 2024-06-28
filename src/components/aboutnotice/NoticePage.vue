<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"></p>
    <div class="form-floating">
      <ul>
        <!-- Header row for column names -->
        <li class="board-header">
          <span class="board-info-header">번호</span>
          <span class="board-info-header">제목</span>
          <span class="board-info-header">작성자</span>
          <span class="board-info-header">날짜</span>
          <span class="board-info-header">조회수</span>
        </li>

        <!-- Data rows -->
        <li v-for="(item, idx) in state.boardList" :key="idx" class="board-item">
          <span class="board-info">{{ item.boardId }}</span>
          <span class="board-info">{{ item.title }}</span>
          <span class="board-info">{{ item.memberId }}</span>
          <span class="board-info">{{ item.createdDate }}</span>
          <span class="board-info">{{ item.viewCount }}</span>
        </li>
      </ul>
    </div>

    <!-- <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Find-Id</button> -->

  </div>
  <hr class="my-4">
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: 'NoticePage',
  setup() {
    // state 객체 정의
    const state = reactive({
      boardList: []
    });

    // 데이터 가져오기
    axios.get("/savemoney/board").then(( {data} ) => {
      
      state.boardList = data;
            
    });

    // setup 함수에서 반환할 내용 정의
    return { state };
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 2000px;
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
  text-align: center; /* 데이터 텍스트 가운데 정렬 */
}

</style>