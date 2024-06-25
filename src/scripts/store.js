import { createStore } from 'vuex'

const store = createStore({
    state: function (){
        return {
            account: {
                memberId : 0,
            }
        }
    },
    mutations : {
        setAccount(state, payload){
            state.account.memberId = payload;
        }
    }
})

export default store;