<template>
  <div class="container">
    <main>
      <div class="row g-5">
        <hr class="my-4">
        <div class="col-md-7 col-lg-8">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="name" class="form-label">Id</label>
                <input type="text" class="form-control" v-model="state.member.memberId" placeholder="" required>
              </div>
              <div class="col-sm-6">
                <label for="Password" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="state.member.memberPwd" placeholder="" required>
              </div>
              <div class="msg">
                {{ msgState.msg }}
              </div>
              <div class="col-12">
                <label for="username" class="form-label">E-mail</label>
                <div class="input-group has-validation">
                  <input type="text" id="email" name="email" class="form-control" required ref="emailInput">
                  <span class="input-group-text">@</span>
                  <input type="text" id="emailDomain" name="emailDomain" class="form-control" required ref="emailDomainInput">
                  <div class="invalid-feedback"> Your username is required. </div>
                </div>
              </div>
              <div class="col-12">
                <label for="phoneNumber" class="form-label">Phone-Number</label>
                <div class="row g-3">
                  <div class="col-sm-2">
                    <input type="text" class="form-control" id="firstNumber" name="firstNumber" required ref="firstNumberInput">
                  </div>
                  <div class="col-sm-2">
                    <input type="text" class="form-control" id="secondNumber" name="secondNumber" required ref="secondNumberInput">
                  </div>
                  <div class="col-sm-2">
                    <input type="text" class="form-control" id="thirdNumber" name="thirdNumber" required ref="thirdNumberInput">
                  </div>
                </div>
              </div>
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" v-model="state.member.address" required>
                <div class="invalid-feedback"> Please enter your shipping address. </div>
              </div>
            </div>
            <hr class="my-4">
            <button @click.prevent="joinMember" class="w-100 btn btn-primary btn-lg" type="submit">Join Member</button>
          </form>
        </div>
      </div>
    </main>
    <hr class="my-4">
  </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
// import axios from 'axios';
// import { reactive } from 'vue';

export default {
  name: 'JoinMemberPage',
  setup() {
    const router = useRouter();
    
    // emailAddressInput ref를 생성합니다.
    const emailInput = ref(null);
    const emailDomainInput = ref(null);

    const firstNumberInput = ref(null);
    const secondNumberInput = ref(null);
    const thirdNumberInput = ref(null);

    // reactive 상태를 정의합니다.
    const state = reactive({
      member: {
        memberId: "",
        memberPwd: "",
        phoneNumber: "",
        email: "",
        address: ""
      }
    });

    //로그인 창 넣어주기 위함
    const msgState = reactive({
      reponsemsg : {
        msg : ""
      }
    })

    // 회원가입 함수를 정의합니다.
    const joinMember = () => {

      state.member.email = emailInput.value.value+ "@" +emailDomainInput.value.value;
      state.member.phoneNumber = firstNumberInput.value.value + secondNumberInput.value.value + thirdNumberInput.value.value;

      axios.post('/savemoney/joinmember', state.member)
        .then((response) => {

            if(!response.data) router.push('/'); // 메인 페이지로 이동합니다.
            else {
              msgState.msg = response.data
            } // msg가 없다면 아이디 중복이라는 의미이므로 메인페이지로 가지 않는다.
                                       

        })
        .catch(error => {
          alert('회원가입 에러', error); // 에러 처리 로직을 수행합니다.
          // 예: 사용자에게 에러 메시지를 표시합니다.
        });
    };

    // state와 joinMember 함수를 반환합니다.
    return { state, joinMember, emailInput, emailDomainInput, firstNumberInput, secondNumberInput, thirdNumberInput, msgState};
  }
};

</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}

.msg{
  color : red;
}
</style>