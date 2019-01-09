// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Blog from '@/components/blog/Blog'
import BlogPost from '@/components/blog/BlogPost'
import BlogPostCard from '@/components/blog/BlogPostCard'
import Library from '@/components/Library'
import TechStack from '@/components/TechStack'

import './config/analytics'
import { i18n } from './config/i18n'
import router from './config/router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App,
    Blog,
    BlogPost,
    BlogPostCard,
    Library,
    TechStack
  },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
