<template>
  <div id="blog-home" class="">
    <h1>{{ $t('Joey\'s Blog') }}</h1>
    <div class="row">
      <div v-for="(post, index) in posts"
        :key="post.slug + '_' + index"
        class="col-sm-4"
      >
        <blog-post-card :post="post"></blog-post-card>
      </div>
    </div>
  </div>
</template>

<script>
import { blogPostService } from '@/api/posts'
import BlogPostCard from '@/components/blog/BlogPostCard'

export default {
  name: 'Blog',
  components: { BlogPostCard },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      blogPostService.list().then(res => {
        this.posts = res.data
      })
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<style scoped>

</style>
