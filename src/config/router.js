import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Blog from '@/views/Blog'
import BlogPost from '@/views/BlogPost'
import Library from '@/views/Library'
import TechStack from '@/views/TechStack'

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
          path: 'library',
          name: 'library',
          component: Library
        },
        {
          path: 'tech-stack',
          name: 'tech-stack',
          component: TechStack
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
