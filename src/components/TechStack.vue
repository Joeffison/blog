<template>
  <div id="app-tech-stack">
    <p>{{ $t('Technologies I used to develop this website') }}:</p>
      <ul class="list-inline dev-icons">
      <li class="list-inline-item" v-for="(tech, key) in websiteTechStack" :key="key">
        <i :class="tech.icon" :title="tech.name"></i>
      </li>
    </ul>
    <br><br><br>
    <p>{{ $t('Other Technologies I have experience with') }}:</p>
    <ul class="dev-icons center">
      <li class="center" v-for="(experience, key) in professionalExperience" :key="key">
        <p>
          <i :class="experience.icon" :title="experience.name"></i>
          {{experience.name}}: {{$t('since')}} {{experience.since}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  data () {
    return {
      websiteTechStack: {
        html5: this.experienceConstructor('HTML5', 'fab fa-html5'),
        css3: this.experienceConstructor('CSS3', 'fab fa-css3-alt'),
        js: this.experienceConstructor('JavaScript', 'fab fa-js-square'),
        vuejs: this.experienceConstructor('Vue.js', 'fab fa-vuejs'),
        sass: this.experienceConstructor('SASS', 'fab fa-sass'),
        yarn: this.experienceConstructor('Yarn', 'fab fa-yarn'),
        npm: this.experienceConstructor('npm', 'fab fa-npm')
      },
      professionalExperience: {
        python: this.experienceConstructor('Python', 'fab fa-python', 2015),
        sql: this.experienceConstructor('SQL', 'fas fa-database', 2015),
        git: this.experienceConstructor('git', 'fab fa-git', 2015),
        angular: this.experienceConstructor('Angular/AngularJS', 'fab fa-angular', 2015),
        spark: this.experienceConstructor('Spark', 'fas fa-feather', 2017),
        databricks: this.experienceConstructor('Databricks', 'fas fa-pie-chart', 2017),
        tableau: this.experienceConstructor('Tableau', 'fas fa-plus', 2017),
        aws: this.experienceConstructor('AWS', 'fab fa-aws', 2017),
        r: this.experienceConstructor('R', 'fas fa-chart-area', 2017),
        matplotlib: this.experienceConstructor('Matplotlib', 'fas fa-chart-line', 2017)
      }
    }
  },
  methods: {
    experienceConstructor (name, icon, since) {
      return {
        name: name,
        icon: icon,
        since: since
      }
    }
  }
}
</script>

<style scoped>
</style>
