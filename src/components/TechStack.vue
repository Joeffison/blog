<template>
  <div id="app-tech-stack">
    <p>{{ $t('Technologies I used to develop this website') }}:</p>
    <ul class="list-inline dev-icons">
      <li class="list-inline-item">
        <i class="fab fa-html5"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-css3-alt"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-js-square"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-vuejs"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-sass"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-yarn"></i>
      </li>
      <li class="list-inline-item">
        <i class="fab fa-npm"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TechStack'
}
</script>

<style scoped>
</style>
