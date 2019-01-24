<template>
  <div class="ribbon" id="component-ribbon">
    {{ mainText }}
    <i id="ribbon-left-edge"></i>
    <i id="ribbon-right-edge"></i>
    <i id="ribbon-left-back"></i>
    <i id="ribbon-right-back"></i>
  </div>
</template>

<script>
export default {
  name: 'AppRibbon',
  props: {
    mainText: { type: String }
  }
}
</script>

<style scoped>

</style>
