import Request from './request'
import { TIME_OUT, BASE_URL } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
