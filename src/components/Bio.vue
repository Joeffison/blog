<template>
  <div id="app-bio">
    <classic-post-it
      :class="getPostClass(index)" v-for="(postit, index) in postits" :key="postit.text1"
      :text1="$t(postit.text1)"
      :text2="$t(postit.text2)"
    >
    </classic-post-it>
  </div>
</template>

<script>
import ClassicPostIt from '@/components/postIt/ClassicPostIt'

export default {
  name: 'Bio',
  components: { ClassicPostIt },
  data () {
    return {
      postits: [
        {
          text1: 'I am in love with Germany since my exchange in Dresden, Saxony.',
          text2: 'PS: I &hearts; Spekulatius'
        },
        {
          text1: 'My hobbies are reading, coding and studying about investments.',
          text2: '...and everyone knows I love Oscar Wilde &#38; Fernando Pessoa'
        },
        {
          text1: 'I am passionate about development in Python and Data Science.'
        }
      ]
    }
  },
  methods: {
    getPostClass (index) {
      index++
      if (index % 3 === 0) {
        return 'post-it-paper-tertiary'
      } else if (index % 2 === 0) {
        return 'post-it-paper-secondary'
      } else {
        return 'post-it-paper-primary'
      }
    }
  }
}
</script>

<style scoped>

</style>
