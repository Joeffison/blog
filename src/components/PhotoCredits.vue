<template>
  <article id="photo-credits" class="photo-credits">
    <a class="photo-credits-badge"
       href="https://unsplash.com/@fellowferdi?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
       target="_blank"
       rel="noopener noreferrer"
       :title="'Download free do whatever you want high-resolution photos from ' + author">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </svg>
      </span>
      <span>{{ author }}</span>
    </a>
  </article>
</template>

<script>
export default {
  name: 'PhotoCredits',
  props: {
    author: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-credits-badge {
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 2px 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif;
  font-size: 0.5em;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  border-radius: 3px;

  span {
    display: inline-block;
    padding: 1px 1.5px;

    svg {
      height: 1em;
      width: auto;
      position: relative;
      vertical-align: middle;
      top: -1px;
      fill: white;
    }
  }
}
</style>
