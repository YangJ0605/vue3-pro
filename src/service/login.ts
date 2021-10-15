import { IBaseData } from './type'
import service from './'

export interface IAccount {
  name: string
  password: string
}

interface ILoginResponse {
  name: string
  token: string
  id: number
}
export const loginRequest = (account: IAccount): Promise<IBaseData<ILoginResponse>> => {
  return service.post({
    url: '/api/login',
    data: account
  })
}

export const requestUserInfoById = (id: number): Promise<IBaseData<any>> => {
  return service.get({
    url: '/api/users/' + id,
    showLoading: false
  })
}

export const requestUserMenusByRoleId = (id: number): Promise<IBaseData<any>> => {
  return service.get({
    url: '/api/role/' + id + '/menu',
    showLoading: false
  })
}
