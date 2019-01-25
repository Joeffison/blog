<template>
  <div id="component-portfolio">
    <page-separator-tooltip></page-separator-tooltip>
    <article class="app-content-container">
      <b-card no-body>
        <b-tabs pills cards vertical v-model="tabIndex">
          <b-tab
            v-for="(tab, index) in tabs" :key="index"
            :title="$t(tab.title)"
            :title-item-class="'portfolio-li rounded' + getActiveTabClass(index)"
            :title-link-class="'portfolio-tab-item rounded' + getActiveTabClass(index)"
            v-html="$t(tab.content)"
          >
          </b-tab>
        </b-tabs>
      </b-card>
    </article>
  </div>
</template>

<script>
import PageSeparatorTooltip from '@/components/PageSeparatorTooltip'

export default {
  name: 'AppPortfolio',
  components: { PageSeparatorTooltip },
  data () {
    return {
      tabIndex: 0,
      tabs: [
        {title: 'This website', content: '#portfolio-this-website'},
        {title: 'Coding Challenges', content: '#portfolio-coding-challenges'},
        {title: 'Machine Learning Builder', content: '#portfolio-ml-builder'},
        {title: 'Instagram Utility', content: '#portfolio-instagram-utility'},
        {title: 'Academic Research', content: '#portfolio-academic-research'}
      ]
    }
  },
  methods: {
    getActiveTabClass (index) {
      return index === this.tabIndex ? ' active' : ''
    }
  }
}
</script>

<style scoped>

</style>
