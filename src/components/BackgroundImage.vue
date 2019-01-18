<template>
  <div
    id="component-background-image"
    class="background-image"
    :style="'background-image: url(' + imageSrc + ');'"
  >
    <photo-credits author="Ferdinand Stöhr"></photo-credits>
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
    bottom: 1vw;
    right: 1vw;
  }
}
</style>
