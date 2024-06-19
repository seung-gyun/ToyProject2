<template>
  <div class="test">
    {{ TestItem.orders  }}
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';



export default {
  name: 'HelloWorld',

  setup(){

    const TestItem = reactive({
      orders : [],
    })

    axios.get("/savemoney").then(({data})=>{

      TestItem.orders = data;

    })

    return { TestItem }

  }

}
</script>

