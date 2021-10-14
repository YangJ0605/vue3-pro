import storage from '@/utils/storage'
import { loginRequest } from './../../service/login'
import { IRootState } from './../index'
import { Module } from 'vuex'

interface ILoginState {
  token: string
  userInfo: any
}

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log('login account action')
      const res = await loginRequest(payload)
      const { code, data } = res
      if (code === 0) {
        commit('changeToken', data.token)
        storage.set('token', data.token)
      }
    }
  }
}

export default loginModule
