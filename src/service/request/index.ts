import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/index'
interface Config extends AxiosRequestConfig {
  showLoading?: boolean
}

type RequestResolveFn = (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig> | undefined
type RejectFn = (err: any) => any

type ResponseResolveFn = (data: AxiosResponse) => AxiosResponse | Promise<AxiosResponse> | undefined
export default class Request {
  public instance: AxiosInstance
  public loadingInstance?: ILoadingInstance

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  addRequestInterceptor(resovleFn?: RequestResolveFn, rejectFn?: RejectFn): number {
    return this.instance.interceptors.request.use(resovleFn, rejectFn)
  }

  addResponseInterceptor(resovleFn?: ResponseResolveFn, rejectFn?: RejectFn): number {
    return this.instance.interceptors.response.use(resovleFn, rejectFn)
  }

  request<T>(config: Config): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading !== false) {
        this.loadingInstance = ElLoading.service({ lock: true, text: '加载中ing' })
      }
      this.instance
        .request<T>(config)
        .then(res => {
          this.loadingInstance?.close()
          resolve(res.data)
        })
        .catch(err => {
          this.loadingInstance?.close()
          reject(err)
        })
    })
  }
  get<T>(config: Config): Promise<T> {
    config.method = 'GET'
    return this.request(config)
  }
  post<T>(config: Config): Promise<T> {
    config.method = 'POST'
    return this.request(config)
  }
}
