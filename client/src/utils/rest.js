import axios from 'axios'

const serverUrl = process.env.SERVER_URL

const api = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export function getData () {
  return api.get(serverUrl + '/')
}
