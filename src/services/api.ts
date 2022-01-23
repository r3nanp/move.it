import axios from 'axios'
import toast from 'react-hot-toast'

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    toast.error(error.message)
    return Promise.reject(error)
  }
)
