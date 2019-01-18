<template>
  <div id="view-bio">
    <article class="app-content-container">
      <section id="bio-professional" class="row row-eq-height">
        <div class="app-card col-sm-4">
          <b-card>
            <div class="icon-holder">
              <i class="fas fa-book-reader" title="Literature and Poetry"></i>
            </div>
            <p class="card-text">
              {{ $t('#bio-literature-card') }}
            </p>
          </b-card>
        </div>

        <div class="app-card col-sm-4">
          <b-card>
            <div class="icon-holder">
              <i class="fab fa-meetup" title="Tech and Meetups"></i>
            </div>
            <div class="card-text">
              <p v-html="$t('#bio-meetup-card')">
              </p>
            </div>
          </b-card>
        </div>

        <div class="app-card col-sm-4">
          <b-card>
            <div class="icon-holder">
              <i class="fas fa-user-tie" title="Entrepreneurship and Investments"></i>
            </div>
            <p class="card-text">
              {{ $t('#bio-investments-card') }}
            </p>
          </b-card>
        </div>
      </section>
    </article>
    <div class="page-separator row">
      <div class="col-sm-4" style="margin-top:25px;margin-bottom:25px;"></div>
      <p style="vertical-align: middle; position: center" class="col-sm-4">Enjoy!</p>
      <div class="col-sm-4" style="margin-top:25px;margin-bottom:25px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBio'
}
</script>

<style lang="scss" scoped>
.icon-holder {
  $size: 64px;
  font-size: $size/2;
  color: white;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  line-height: $size;
  width: $size;
  height: $size;
  text-align: center;
  vertical-align: bottom;
  max-width: 100%;
}

.app-card {
  padding: 15px 15px;

  .card {
    height: 100%;
  }
}

.page-separator {
  background-color: #a0ce4e;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;

  div {
    border-color: rgba(255, 255, 255, 0.5);
    border-top-width: 1px;
    border-bottom-width: 1px;
    height: 6px;
    border-bottom-style: solid;
    border-top-style: solid;
  }
  p {
    font-size: 38px;
    font-family: 'Sail', cursive;
    padding: 0 0 !important;
    margin: 0 0 !important;
  }
}
</style>
