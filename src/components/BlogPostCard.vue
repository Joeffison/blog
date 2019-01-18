<template>
  <router-link
    :to="{ name: 'blog-post', params: { slug: post.slug } }"
    id="blog-post-card"
  >
    <article class="card blog-post-list">
      <div class="row no-gutters">
        <div class="col" v-if="post.featured_image">
          <img :src="post.featured_image" alt="">
        </div>
        <div class="col">
          <div class="card-block px-2">
            <h4 class="card-title">{{ post.title }}</h4>
            <p class="card-text">{{ post.summary }}</p>
            <button class="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-post-list {
  margin-bottom: 1rem;
}
</style>
