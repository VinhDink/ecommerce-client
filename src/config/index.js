import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
      config.baseURL = "http://localhost:4000/api";
      config.timeout = 5000
      config.headers.Accept = 'application/json'
      config.headers.Authorization = `${localStorage.getItem('token')}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  
export default axios;