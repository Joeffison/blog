<template>
  <div
    id="component-background-image"
    class="background-image"
    :style="'background-image: url(' + imageSrc + ');'"
  >
   <photo-credits v-if="imageAuthor" :author="imageAuthor" :author-username="imageAuthorUsername">
   </photo-credits>
  </div>
</template>

<script>
import PhotoCredits from '@/components/PhotoCredits'

export default {
  name: 'BackgroundImage',
  components: { PhotoCredits },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAuthor: {
      type: String,
      required: false,
      default: () => ''
    },
    imageAuthorUsername: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
div.background-image {
  width: 100vw;
  min-height: 40vh;
  max-height: 40rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  position: relative;

  .photo-credits {
    position: absolute;
    bottom: 1px;
    right: 1px;
  }
}
</style>
