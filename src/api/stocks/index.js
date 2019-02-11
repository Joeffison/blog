import alphaVantageApi from './alphaVantageApi'
import alphaVantageMock from './alphaVantageMock'

const stockApi = process.env.NODE_ENV === 'development' ? alphaVantageMock : alphaVantageApi

function serializeStockDailyData (data) {
  let serializedData = data['Time Series (Daily)']
  serializedData = _serializeStockResponse(serializedData)
  serializedData = _sortDataPoints(serializedData)
  serializedData = _fillGaps(serializedData)

  let response = {
    data: serializedData,
    metadata: _serializeMetrics(data['Meta Data'])
  }

  response.metadata.growth = _getGrowth(serializedData[0].prices,
    serializedData[serializedData.length - 1].prices)

  return response
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

function _serializeMetrics (data) {
  let serialized = {}

  for (let [metric, value] of Object.entries(data)) {
    let serializedMetric = metric.toLowerCase().split(' ').slice(1).join('_')
    serialized[serializedMetric] = value
  }

  return serialized
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
    .then(response => serializeStockDailyData(response.data))
}
