<template>
  <div id="section-data-visualization">
    <page-separator-tooltip
      separator-class="bg-secondary"
      :separator-text="$t('Data Science') + '!'"
      :separator-sub-text="$t('#data-visualization-intro')"
    />
    <article class="app-content-container">
      <div class="row">
        <div class="col-md-6" v-for="(plot, index) in lineCharts" :key="index">
          <vue-plotly
            :data="plot.data"
            :layout="plot.layout"
            :options="plot.options"/>
        </div>
        <div class="col-md-6" v-for="(plot, index) in candleSticks" :key="index">
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
import dataVisualizationService from '@/api/dataVisualizationService'

export default {
  name: 'DataVisualization',
  components: {
    VuePlotly,
    PageSeparatorTooltip
  },
  data () {
    return {
      candleSticks: [],
      lineCharts: [],
      stocks: ['ITSA4.SAO', 'AAPL34.SAO']
    }
  },
  created () {
    for (let [index, stock] of Object.entries(this.stocks)) {
      stocks(stock)
        .then(response => {
          let settings = dataVisualizationService.getCandlestickSettings(response)
          this.candleSticks.splice(index, 0, settings)
          settings = dataVisualizationService.getLineChartSettings(response)
          this.lineCharts.splice(index, 0, settings)
        })
    }
  }
}
</script>

<style scoped>

</style>
