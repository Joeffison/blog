<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>
    <router-view/>
  </div>
</template>

<script>
import { changeLanguage } from '@/config/i18n'
import AppNavBar from '@/components/Navbar'

export default {
  name: 'App',
  components: { AppNavBar },
  methods: {
    onRouting () {
      if (this.$route.params.lang) {
        changeLanguage(this.$route.params.lang)
      }
    }
  },
  created () {
    this.onRouting()
  },
  watch: {
    $route (to, from) {
      this.onRouting()
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/app.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
