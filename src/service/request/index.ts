import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// type RequestResolveFn = (config: AxiosRequestConfig) => void

export default class Request {
  public instance: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  addRequestInterceptor(): void {
    this.instance.interceptors.request.use()
  }
}
