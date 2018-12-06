import axios from 'axios'
import { CONFIG } from '../config'

const client = axios.create({
  baseURL: CONFIG.BITCOIN.API_BASE_PATH
})

const bitcoinRequest = function(options) {

  client.defaults.headers.common['X-Mashape-Key'] = CONFIG.BITCOIN.API_KEY
  client.defaults.headers.common['Accept'] = 'application/json'
  client.defaults.headers.common['Accept-Language'] = 'cs'

  const onSuccess = function(response) {
    console.debug('Request Successful!', response)
    return response.data
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config)

    if (error.response) {
      console.error('Status:',  error.response.status)
      console.error('Data:',    error.response.data)
      console.error('Headers:', error.response.headers)
    } else {
      console.error('Error Message:', error.message)
    }

    return Promise.reject(error.response || error.message)
  }

  return client(options)
    .then(onSuccess)
    .catch(onError)
}

export default bitcoinRequest
