<template>
  <div id="component-page-separator" :class="separatorClass">
    <div class="app-fullwidth app-fullwidth-bar">
      <div class="app-layout-column">
        <div class="app-column-wrapper">
          <div class="app-container">
            <h2 v-text="separatorText"></h2>
          </div>
          <div class="app-clearfix"></div>
        </div>
      </div>
      <div class="app-layout-column" v-if="separatorSubText">
        <div class="app-column-wrapper">
          <div class="app-container">
            <p v-text="separatorSubText"></p>
          </div>
          <div class="app-clearfix"></div>
        </div>
      </div>
    </div>
    <div class="app-fullwidth app-fullwidth-candy">
      <div class="app-layout-column">
        <div class="app-column-wrapper">
          <div class="app-section-separator">
            <div class="divider-candy-arrow bottom"></div>
            <div class="divider-candy bottom"></div>
          </div>
          <div class="app-clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSeparatorTooltip',
  props: {
    separatorText: {
      type: String,
      required: false,
      default: () => ''
    },
    separatorSubText: {
      type: String,
      required: false,
      default: () => ''
    },
    separatorClass: {
      type: String,
      required: false,
      default: () => ''
    }
  }
}
</script>

<style scoped>

</style>
