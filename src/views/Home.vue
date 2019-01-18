<template>
  <div id="view-home">
    <background-image :image-src="'static/images/large/background/homepage.jpg'">
    </background-image>

    <article class="app-content-container">
      <h1 class="app-title">{{ $t('Look through the window') }}...</h1>
    </article>

    <app-bio></app-bio>
  </div>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage'
import AppBio from '@/components/Bio'

export default {
  name: 'Home',
  components: { BackgroundImage, AppBio }
}
</script>

<style scoped>

</style>
