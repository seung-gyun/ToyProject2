<template>
  <div class="form-signin w-100 m-auto">
    <p class="mt-5 mb-3 text-body-secondary"></p>
    <div class="form-floating">
      <ul>
        <!-- Header row for column names -->
        <li class="board-header">
          <span class="board-info-header">제목</span>
          <span class="board-info-header">작성자</span>
          <span class="board-info-header">날짜</span>
          <span class="board-info-header">조회수</span>
        </li>

        <!-- Data rows -->
        <li v-for="(item, idx) in state.boardList" :key="idx" class="board-item">
          <span class="board-info"><a href="#" @click.prevent="goToDetail( item.boardId )">{{ item.title }}</a></span>
          <span class="board-info">{{ item.memberId }}</span>
          <span class="board-info">{{ item.createdDate }}</span>
          <span class="board-info">{{ item.viewCount }}</span>
        </li>
      </ul>

      <div class="pagination-wrapper" v-if="page.totalPage > 0">
        <div class="pagination">

          <button @click="fetchPage(page.currentPage - 1)" :disabled="page.currentPage === 1"
          class="btn btn-outline-primary">&lt;</button>

          <button v-for="idx in page.totalPage" :key="idx" @click="fetchPage(idx)" 
                  :class="{ 'btn': true, 'btn-outline-primary': true, 'active': idx === page.currentPage }">
                {{ idx }}
          </button>

          <button @click="fetchPage(page.currentPage + 1)" :disabled="page.currentPage === page.totalPage"
          class="btn btn-outline-primary">&gt;</button>

        </div>
      </div>

      <button class="btn btn-primary w-100 py-2" @click.prevent="register()">GoTo Register notice</button>
    </div>

    <!-- <button @click="submit()" class="btn btn-primary w-100 py-2" type="submit">Find-Id</button> -->

  </div>
  <hr class="my-4">
</template>

<script>
import axiosInstance from '@/scripts/commonAxios';
import router from '@/scripts/router';
import axios from 'axios';
import { reactive } from 'vue';
// import { useStore } from 'vuex';
import { onMounted } from 'vue';

export default {
  name: 'NoticePage',
  setup() {

    // state 객체 정의
    const state = reactive({
      boardList: []
    });
  
    const page = reactive({
      currentPage:1,
      pageSize:10,
      totalPage : 0
    })


    // Function to fetch data for a specific page
    const fetchData = () => {

      axiosInstance.get('board/'+page.currentPage)
        .then(({ data }) => {
          
          state.boardList = data.boardList; // Assuming data.content is your array of items
          page.totalPage = Math.ceil(data.totalPage/10); // Assuming data.totalElements is the total count of items

          router.push('/noticePage?currentPage='+page.currentPage);

          console.log(page.totalPage);

        })
        .catch((error) => {

          console.log(error);
          
        });
    };

    onMounted(() => {
      fetchData(); // 컴포넌트가 마운트된 후 fetchData 함수 실행
    });
    
    const fetchPage = (pageIndex) => {
      page.currentPage = pageIndex; // Update current page number
      fetchData(); // Fetch data for the selected page
    };


    // Function to navigate to the register page
    const register = () => {
      axios.get("/savemoney/goregister")
        .then(() => {
          router.push("/insertionnotice");
        });
    };

    const goToDetail=(data)=>{

      router.push({ path: '/detailnotice', query: { boardid: data } });

    }

    // setup 함수에서 반환할 내용 정의
    return { state, register, goToDetail, fetchData, page, fetchPage };
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

.pagination-wrapper {
  padding : 50px;
  display: flex;
  justify-content: center;
  margin-top: 10px; /* 필요한 경우 상단 여백 조정 */
}

.pagination {
  display: flex;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}

.pagination button {
  margin: 0 3px;
}

</style>