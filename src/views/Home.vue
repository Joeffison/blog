<template>
  <div id="view-home">
    <background-image
      :image-src="'static/images/large/background/homepage.jpg'"
      image-author="Ferdinand Stöhr"
      image-author-username="fellowferdi">
    </background-image>

    <article class="app-content-container">
      <h1 class="app-title">{{ $t('Look through the window') }}...</h1>
    </article>

    <app-bio></app-bio>
    <app-portfolio></app-portfolio>
    <data-visualization></data-visualization>
  </div>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage'
import AppBio from '@/components/Bio'
import AppPortfolio from '@/components/Portfolio'
import DataVisualization from '@/views/sections/DataVisualization'

export default {
  name: 'Home',
  components: {
    BackgroundImage,
    AppBio,
    AppPortfolio,
    DataVisualization
  }
}
</script>

<style scoped>

</style>
