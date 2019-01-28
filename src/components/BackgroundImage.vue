<template>
  <div
    id="component-background-image"
    :class="backgroundClass"
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
    },
    imagePosition: {
      type: String,
      required: false,
      default: () => 'center'
    }
  },
  computed: {
    backgroundClass: function () {
      let defaultClass = 'background-image'

      if (this.imagePosition.toLowerCase() === 'top') {
        return defaultClass + ' background-image-top'
      }

      return defaultClass
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

  &.background-image-top {
    background-position-y: top;
  }

  .photo-credits {
    position: absolute;
    bottom: 1px;
    right: 1px;
  }
}
</style>
