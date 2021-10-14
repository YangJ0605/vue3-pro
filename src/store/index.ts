import { createStore } from 'vuex'
import login from './login'
export interface IRootState {
  count: number
}

const store = createStore<IRootState>({
  state() {
    return {
      count: 100
    }
  },
  mutations: {},
  modules: {
    login
  }
})

export default store
