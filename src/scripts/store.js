import { createStore } from 'vuex'

const store = createStore({
    state: function (){
        return {
            account: {
                memberId : 0,
                remainingTime : 0,
            }
        }
    },
    mutations : {
        setAccount(state, payload){
            state.account.memberId = payload.memberId;
            state.account.remainingTime = payload.remainingTime;
        }
    }
})

export default store;