import axios from 'axios'

const serverUrl = process.env.SERVER_URL

const localAuthData = localStorage.getItem('auth')
var storedAuthData = localAuthData && JSON.parse(localAuthData)

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
if (storedAuthData && storedAuthData.token) {
  headers.Authorization = `Bearer ${storedAuthData.token}`
}
const api = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
  headers
})

api.interceptors.response.use(
  (response) => {
    if (response.data.status === 200) {
      return response.data.data
    } else {
      return null
    }
  },
  (error) => {
    throw error
  }
)

export function register (data) {
  return api.post('/api/auth/register', data)
}

export function authenticate (data) {
  return api.post('/api/auth/authenticate', data)
}

export function logout (data) {
  return api.post('/api/users/logout-all', data)
}
