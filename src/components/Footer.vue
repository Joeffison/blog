<template>
  <footer id="component-footer" class="center mt-auto py-3">
    <section id="footer-contact-section">
      <a v-for="contact in contacts" :key="contact.name"
         class="icon-holder"
         target="_blank"
         :href="contact.link"
         :title="contact.name">
        <i :class="contact.icon"></i>
      </a>
    </section>
    <app-ribbon
      :main-text="'© ' + new Date().getFullYear() + ' Joeffison Silvério de Andrade'">
    </app-ribbon>
    <div v-if="$route.name === 'blog' || $route.name === 'blog-post'" style="margin-top: -13px;">
      <span style="font-size: 0.75em;">Blog powered by: </span>
      <a href="https://buttercms.com" target="_blank">
        <img style="max-width: 100px;" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH">
      </a>
    </div>
  </footer>
</template>

<script>
import AppRibbon from '@/components/Ribbon'

export default {
  name: 'AppFooter',
  components: { AppRibbon },
  data () {
    return {
      contacts: [
        {
          name: 'github',
          link: 'https://github.com/joeffison',
          icon: 'fab fa-github-alt'
        },
        {
          name: 'linkedin',
          link: 'https://linkedin.com/in/joeffison-silvério-de-andrade-3b1716a6/',
          icon: 'fab fa-linkedin-in'
        },
        {
          name: 'goodreads',
          link: 'https://www.goodreads.com/user/show/70059834-joeffison-andrade',
          icon: 'fab fa-goodreads-g'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/anjosilverio/',
          icon: 'fab fa-instagram'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
