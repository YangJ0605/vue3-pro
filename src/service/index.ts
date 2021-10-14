import storage from '@/utils/storage'
import Request from './request'
import { TIME_OUT, BASE_URL } from './request/config'

const service = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

service.addRequestInterceptor(config => {
  if (!config.headers) {
    config.headers = {}
  }
  const token = storage.get('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})
service.addResponseInterceptor(res => {
  return res
})

export default service
