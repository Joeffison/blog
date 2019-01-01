import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/blog/Blog'
import BlogPost from '@/components/blog/BlogPost'
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
          path: 'blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/:lang/blog/:slug',
      name: 'BlogPost',
      component: BlogPost,
      beforeEnter (to, from, next) {
        if (to.params.lang) {
          changeLanguage(to.params.lang)
        }
        next()
      }
    }
  ]
})
