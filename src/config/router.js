import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/blog/Blog'
import BlogPost from '@/components/blog/BlogPost'
import Home from '@/components/Home'
import Bio from '@/components/Bio'
import { changeLanguage } from './i18n'

Vue.use(Router)

export function updateLanguageFromRoute (to, from, next) {
  if (to.params.lang) {
    changeLanguage(to.params.lang)
  }
  next()
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/en/'
    },
    {
      path: '/:lang',
      component: {
        template: '<router-view></router-view>'
      },
      beforeEnter: updateLanguageFromRoute,
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: Blog
        },
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'bio',
          name: 'bio',
          component: Bio
        }
      ]
    },
    {
      path: '/:lang/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
      beforeEnter: updateLanguageFromRoute
    }
  ]
})
