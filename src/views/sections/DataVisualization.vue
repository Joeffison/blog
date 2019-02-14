<template>
  <div id="section-data-visualization">
    <page-separator-tooltip
      separator-class="bg-secondary"
      :separator-text="$t('Data Science') + '!'"
      :separator-sub-text="$t('#data-visualization-intro')"
    />
    <article class="app-content-container">
      <div class="row">
        <div class="col-md-6" v-for="(plot, index) in plotSettings" :key="index">
          <vue-plotly
            :data="plot.data"
            :layout="plot.layout"
            :options="plot.options"/>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'

import PageSeparatorTooltip from '@/components/PageSeparatorTooltip'
import stocks from '@/api/stocks'

export default {
  name: 'DataVisualization',
  components: {
    VuePlotly,
    PageSeparatorTooltip
  },
  data () {
    return {
      plotSettings: [],
      stocks: ['ITSA4.SAO', 'AAPL34.SAO']
    }
  },
  methods: {
    getClosingPrice (stocksResponse) {
      let closingPrices = {timestamp: [], price: []}

      for (let dataPoint of Object.values(stocksResponse.data)) {
        closingPrices.timestamp.push(dataPoint.timestamp)
        closingPrices.price.push(dataPoint.prices.close)
      }

      return closingPrices
    },
    getPlotSettings (stocksResponse) {
      let nOfDataPoints = stocksResponse.data.length
      let closingPrices = this.getClosingPrice(stocksResponse)

      let lineColor = stocksResponse.metadata.growth.close >= 0 ? '#00bcd4' : '#e91e63'

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

      let plotSettings = {
        data: [{
          x: closingPrices.timestamp,
          y: closingPrices.price,
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
          x: [closingPrices.timestamp[0], closingPrices.timestamp[nOfDataPoints - 1]],
          y: [closingPrices.price[0], closingPrices.price[nOfDataPoints - 1]],
          type: 'scatter',
          mode: 'markers',
          marker: {
            color: lineColor,
            size: 12
          },
          hoverinfo: 'skip',
          showlegend: false
        }],
        layout: layout,
        options: {responsive: true}
      }

      return plotSettings
    }
  },
  created () {
    for (let [index, stock] of Object.entries(this.stocks)) {
      stocks(stock)
        .then(this.getPlotSettings)
        .then(settings => { this.plotSettings.splice(index, 0, settings) })
    }
  }
}
</script>

<style scoped>

</style>
