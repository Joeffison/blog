<template>
  <div id="component-portfolio">
    <page-separator-tooltip></page-separator-tooltip>
    <article class="app-content-container">
      <b-card no-body>
        <b-tabs pills cards vertical>
          <b-tab :title="$t('This website')"
                 title-item-class="portfolio-li rounded"
                 title-link-class="portfolio-tab-item rounded"
                 active
          >
            {{ $t('#portfolio-this-website') }}
          </b-tab>
          <b-tab :title="$t('Coding Challenges')"
                 title-item-class="portfolio-li rounded"
                 title-link-class="portfolio-tab-item"
          >
            <span v-html="$t('#portfolio-coding-challenges')"></span>
          </b-tab>
          <b-tab :title="$t('Machine Learning Builder')"
                 title-item-class="portfolio-li rounded"
                 title-link-class="portfolio-tab-item"
          >
            {{ $t('#portfolio-ml-builder') }}
          </b-tab>
          <b-tab :title="$t('Instagram Utility')"
                 title-item-class="portfolio-li rounded"
                 title-link-class="portfolio-tab-item"
          >
            {{ $t('#portfolio-instagram-utility') }}
          </b-tab>
          <b-tab :title="$t('Academic Research')"
                 title-item-class="portfolio-li rounded"
                 title-link-class="portfolio-tab-item"
         >
            {{ $t('#portfolio-academic-research') }}
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
  components: { PageSeparatorTooltip }
}
</script>

<style scoped>

</style>
