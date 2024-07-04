<template>
  <div class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand d-md-none" href="#">
        <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
        Aperture
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 justify-content-between">
            <a  @click="home()"><li class="nav"><a class="nav-link" href="#">Home</a></li></a>
            <a></a><li class="nav-item"><a class="nav-link" href="#">
              <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
            </a></li>
            <router-link to="/noticepage"><li class="nav-item"><a class="nav-link">Notice</a></li></router-link>
            <li class="nav-item"><a class="nav-link" href="#">Product</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Enterprise</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
            <router-link to="/login" v-if="!store.state.account.memberId"><li class="nav"><a class="nav-link" href="#">Login</a></li></router-link>
            <a  @click.prevent="logout()" v-else><li class="nav"><a class="nav-link" href="#">Logout</a></li></a>
            <!-- <li class="nav-item"><a class="nav-link" href="#">
              <svg class="bi" width="24" height="24"><use xlink:href="#cart"></use></svg>
            </a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/scripts/router';
import store from '@/scripts/store';
import axios from 'axios';
// import { computed } from 'vue';

export default {
  
  name : 'AppHeader',
  setup(){

    const logout = ()=>{

      axios.post("/savemoney/logout").then(()=>{

      })

      store.commit('setAccount', 0);
      sessionStorage.removeItem("id");
      router.push("/");

    }

    const home = ()=>{
      axios.get("/savemoney/gohome").then(()=>{
        router.push("/");
      })
    }

    return { logout, store, home};

  }

}
</script>

<style scoped>

.nav-item {
  margin-right:1fr;
}

</style>

