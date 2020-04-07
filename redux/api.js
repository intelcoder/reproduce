import axios from 'axios'
import querystring from 'querystring'
export const api = axios.create({
  baseURL: 'https://api.test.ca/v1/',
  paramsSerializer(params) {
    return querystring.stringify(params)
  },
})
// const { CancelToken } = axios

export const generateRequest = ({ type = 'GET', token = null, url }) => {
  if (!url) {
    throw new Error('api request requires url')
  }
  const headers = { 'content-type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return data =>
    api({
      url,
      method: type,
      headers,
      data,
    })
}
