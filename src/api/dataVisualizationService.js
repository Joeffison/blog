const positiveColor = '#00bcd4'
const negativeColor = '#e91e63'
const options = { responsive: true }

function stockResponse2chartData (stocksResponse) {
  let chartData = {timestamp: [], close: [], high: [], low: [], open: []}

  for (let dataPoint of Object.values(stocksResponse.data)) {
    chartData.timestamp.push(dataPoint.timestamp)
    chartData.close.push(dataPoint.prices.close)
    chartData.high.push(dataPoint.prices.high)
    chartData.low.push(dataPoint.prices.low)
    chartData.open.push(dataPoint.prices.open)
  }

  return chartData
}

function getLineChartSettings (stocksResponse) {
  let nOfDataPoints = stocksResponse.data.length
  let chartData = stockResponse2chartData(stocksResponse)

  let lineColor = stocksResponse.metadata.growth.close >= 0 ? positiveColor : negativeColor

  let layout = {
    margin: {
      l: 24,
      r: 24,
      b: 24,
      t: 24,
      pad: 5
    },
    title: false,
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1,
        xanchor: 'center',
        yanchor: 'top',
        text: stocksResponse.metadata.symbol,
        font: {
          family: 'Arial',
          size: 30
        },
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: -0.1,
        xanchor: 'center',
        yanchor: 'top',
        text: `[Last Refreshed in ${stocksResponse.metadata.last_refreshed}]`,
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ]
  }

  let data = [{
    x: chartData.timestamp,
    y: chartData.close,
    name: stocksResponse.metadata.symbol,
    type: 'scatter',
    mode: 'lines',
    line: {
      color: lineColor, // '#3182BC'
      width: 4
    },
    connectgaps: true,
    showlegend: false
  },
  {
    x: [chartData.timestamp[0], chartData.timestamp[nOfDataPoints - 1]],
    y: [chartData.close[0], chartData.close[nOfDataPoints - 1]],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: lineColor,
      size: 12
    },
    hoverinfo: 'skip',
    showlegend: false
  }]

  return {
    data: data,
    layout: layout,
    options: options
  }
}

const service = {
  getLineChartSettings: getLineChartSettings
}

export default service
