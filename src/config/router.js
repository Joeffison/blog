import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import { changeLanguage } from './i18n'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:lang',
      component: {
        template: '<router-view></router-view>'
      },
      beforeEnter (to, from, next) {
        if (to.params.lang) {
          changeLanguage(to.params.lang)
        }
        next()
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
