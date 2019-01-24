<template>
  <header>
    <b-navbar
      id="app-navbar"
      toggleable="md" class="navbar-light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand :to="{name: 'home'}">Home</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name: 'library'}">Library</b-nav-item>
          <b-nav-item :to="{name: 'tech-stack'}">TechStack</b-nav-item>
          <b-nav-item :to="{name: 'blog'}">Blog</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="$t('Language')" right>
            <b-dropdown-item
              v-for="language in availableLanguages" :key="language"
              :to="{ params: { lang: language } }">
              {{ language.toUpperCase() }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { availableLanguages } from '../config/i18n'

export default {
  name: 'AppNavBar',
  data () {
    return {
      availableLanguages: availableLanguages
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  min-height: 5.5rem;
  border-bottom-color: rgb(210, 211, 212);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  @media only screen and (min-width: 768px) {
    padding-left: 5rem;
  }
}
</style>
