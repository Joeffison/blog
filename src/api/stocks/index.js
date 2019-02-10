import alphaVantageApi from './alphaVantageApi'
import alphaVantageMock from './alphaVantageMock'

const stockApi = process.env.NODE_ENV === 'development' ? alphaVantageMock : alphaVantageApi

function serializeStockData (data) {
  let serializedData = _fillGaps(_sortDataPoints(_serializeStockResponse(data)))

  return {
    data: serializedData,
    metadata: {
      growth: _getGrowth(serializedData[0].prices, serializedData[serializedData.length - 1].prices)
    }
  }
}

function _serializeStockResponse (data) {
  let response = []

  for (let [timestamp, price] of Object.entries(data)) {
    response.push({
      timestamp: timestamp,
      prices: _serializePriceMetrics(price)
    })
  }
  return response
}

function _serializePriceMetrics (prices) {
  let serializedPrice = {}

  for (let [metric, value] of Object.entries(prices)) {
    let serializedMetric = metric.toLowerCase().split(' ').pop()
    serializedPrice[serializedMetric] = parseFloat(value)
  }

  return serializedPrice
}

function _sortDataPoints (serializedStockPrice) {
  return serializedStockPrice.sort((a, b) => a.timestamp.localeCompare(b.timestamp))
}

function _fillGaps (serializedStockPrice) {
  for (let i = 1; i < serializedStockPrice.length; i++) {
    if (serializedStockPrice[i].prices.close === 0) {
      serializedStockPrice[i].prices = serializedStockPrice[i - 1].prices
    }
  }

  return serializedStockPrice
}

function _getGrowth (basePrices, newPrices) {
  let growth = {}

  for (let [metric, value] of Object.entries(basePrices)) {
    growth[metric] = newPrices[metric] - value
  }

  return growth
}

export default function (stock) {
  return stockApi.get(stock)
    .then(response => serializeStockData(response.data['Time Series (Daily)']))
}
