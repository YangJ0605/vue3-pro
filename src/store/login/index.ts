import storage from '@/utils/storage'
import { loginRequest, requestUserInfoById, requestUserMenusByRoleId } from './../../service/login'
import { IRootState } from './../index'
import { Module } from 'vuex'
import router from '@/router'
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
}

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: storage.get('token') ?? '',
      userInfo: storage.get('userInfo') ?? {},
      userMenus: storage.get('userMenus') ?? []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any[]) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log('login account action')
      const loginRes = await loginRequest(payload)
      const { token, id } = loginRes.data

      commit('changeToken', token)
      storage.set('token', token)

      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      storage.set('userInfo', userInfo)

      const userMeunsRes = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMeunsRes.data
      commit('changeUserMenus', userMenus)
      storage.set('userMenus', userMenus)

      router.push('/main')
    }
  }
}

export default loginModule
