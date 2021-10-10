import { createStore } from 'vuex'

const store = createStore<{ count: number }>({
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store
