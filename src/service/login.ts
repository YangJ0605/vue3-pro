import service from './'

export interface IAccount {
  name: string
  password: string
}

interface ILoginResponse {
  code: number
  data: { name: string; token: string; id: number }
}
export const loginRequest = (account: IAccount): Promise<ILoginResponse> => {
  return service.post({
    url: '/api/login',
    data: account
  })
}
