import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
      config.baseURL = process.env.AXIOS_BASE_URL;
      config.timeout = 5000
      config.headers.Accept = 'application/json'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  
export default axios;