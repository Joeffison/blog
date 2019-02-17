<template>
  <div
    :class="imageWrapperClass"
    class="d-flex align-items-center justify-content-center"
  >

    <b-img-lazy
      :src="imageSrc"
      :blank-color="blankColor"
      :blank-height="blankHeight"
      :blank-width="blankWidth"
      :rounded="rounded"
      :thumbnail="thumbnail"
      :class="imageClass"
      class="mw-100"
      offset="0"
      @load.native="imageLoaded"
    />

    <ring-loader
      :loading="loading"
      class="position-absolute"
    />
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader'

export default {
  name: 'LazyLoadImage',
  components: {
    RingLoader
  },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageClass: {
      type: String,
      required: false,
      default: () => ''
    },
    imageWrapperClass: {
      type: String,
      required: false,
      default: () => ''
    },
    blankColor: {
      type: String,
      required: false,
      default: () => '#FFF'
    },
    blankHeight: {
      type: String,
      required: false,
      default: () => '100'
    },
    blankWidth: {
      type: String,
      required: false,
      default: () => '100'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    imageLoaded (event) {
      event.preventDefault()

      // Ensures that the loading indicator won't be disabled when the image is out of the offset
      // Bootstrap's lazy img component loads a placeholder when the image doesn't need to be loaded
      // refer to https://bootstrap-vue.js.org/docs/components/image#lazy-loaded-images
      let filename = this.imageSrc.split('/').pop()
      if (event.path[0].src.indexOf(filename) >= 0) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
