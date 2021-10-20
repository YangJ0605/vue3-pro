import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login, { ILoginState } from './login'
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

export type StoreType = IRootState & {
  login: ILoginState
}

export const useStore = (): Store<StoreType> => {
  return useVuexStore()
}

export default store
