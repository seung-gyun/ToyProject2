<template>
  <AppHeader></AppHeader>
  <RouterView></RouterView>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import axios from 'axios';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import store from './scripts/store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },

  setup(){
    

    
    const check = ()=>{
      axios.get("/savemoney/check").then(({data})=>{
          
          // store.commit('setAccount', {memberId: 0, remainingTime : 0});
          store.commit('setAccount', data || 0);
      
      })
      
    };

    const route = useRoute();

    //router의 변화를 감지하네
    watch(route, ()=>{
      check();
    })

  }
  
}
</script>