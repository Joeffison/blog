<template>
  <div id="blog-post">
    <h1>{{ post.data.title }}</h1>
    <h4 v-if="!post.err">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="getPostLink(post.meta.previous_post.slug)"
      class="btn btn-primary"
    >
      Previous: {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="getPostLink(post.meta.next_post.slug)"
      class="btn btn-secondary"
    >
      Next: {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import { getLanguage } from '@/config/i18n'
import { blogPostService } from '@/api/posts'

export default {
  name: 'BlogPost',
  data () {
    return {
      post: null
    }
  },
  methods: {
    getPostLink (slug) {
      return '/' + getLanguage() + '/blog/' + slug
    },
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
