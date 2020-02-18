import axios from 'axios'
import config from './config'

const serverUrl = config.serverUrl

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

export function urlsList (data) {
  return api.get('/api/urls', data)
}

export function urlDetails (_id, data) {
  return api.get('/api/urls/' + _id, data)
}

export function urlCreate (data) {
  return api.post('/api/urls', data)
}

export function urlUpdate (_id, data) {
  return api.post('/api/urls/' + _id, data)
}

export function urlDelete (_id, data) {
  return api.delete('/api/urls/' + _id)
}

export function urlAnalytics (_id) {
  return api.get('/api/urls/' + _id + '/analytics')
}
