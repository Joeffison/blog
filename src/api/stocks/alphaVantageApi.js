import axios from 'axios'

const stockApi = axios.create({
  baseURL: 'https://www.alphavantage.co/query'
})

function getDaily (stock) {
  return stockApi.get('', {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol: stock,
      apikey: process.env.ALPHA_VANTAGE_API_KEY
    }
  })
}

export default {
  get: getDaily
}
