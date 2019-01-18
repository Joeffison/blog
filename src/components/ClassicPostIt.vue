<template>
  <div class="post-it-paper">
    <p  v-html=text1></p>
    <p v-if="text2" v-html=text2></p>
  </div>
</template>

<script>
export default {
  name: 'ClassicPostIt',
  props: {
    text1: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
