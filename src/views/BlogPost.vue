<template>
  <div id="view-blog-post">
    <article class="app-content-container">
      <h1>{{ post.data.title }}</h1>

      <article class="blog-post-content" v-html="post.data.body"></article>

      <div class="blog-post-buttons">
        <router-link
          v-if="post.meta.previous_post"
          :to="{ params: {slug: post.meta.previous_post.slug} }"
          class="btn btn-primary"
        >
          {{ $t('Previous') }}: {{ post.meta.previous_post.title }}
        </router-link>

        <router-link
          v-if="post.meta.next_post"
          :to="{ params: {slug: post.meta.next_post.slug} }"
          class="btn btn-secondary"
        >
          {{ $t('Next') }}: {{ post.meta.next_post.title }}
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
import { blogPostService } from '@/api/posts'

export default {
  name: 'BlogPost',
  data () {
    return {
      post: null
    }
  },
  methods: {
    getPost () {
      function pageNotFoundSerializer (err) {
        return {
          data: {
            title: '404 - Post Not Found'
          },
          err: err.data,
          meta: {
            previous_post: null,
            next_post: null
          }
        }
      }
      blogPostService.get(this.$route.params.slug)
        .then(post => {
          this.post = post
        }).catch(pageNotFoundSerializer).then(pageNotFound => {
          this.post = pageNotFound
        })
    }
  },
  watch: {
    $route (to, from) {
      this.getPost()
    }
  },
  created () {
    this.getPost()
  }
}
</script>

<style scoped>

</style>
