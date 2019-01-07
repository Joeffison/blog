import Butter from 'buttercms'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getLanguage } from '@/config/i18n'

const butterToken = 'facebee4e5677c69a53be01fc172e9d1ea6d4744'
const butter = Butter(butterToken)

function defaultSerializer (response) {
  return response.data
}

firebase.initializeApp({
  apiKey: 'AIzaSyCZA43nvszPSIK6lPXbeKDmfLEyFp9AoxM',
  authDomain: 'https://accounts.google.com/o/oauth2/auth',
  projectId: 'my-personal-blog-a930f'
})

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
})

const posts = db.collection('blog_post')
const ptPosts = db.collection('pt_blog_post')
const dePosts = db.collection('de_blog_post')

function find (collection, fields, operator, value) {
  let fieldPath = fields
  if (fieldPath instanceof Array) {
    if (fieldPath.length === 1) {
      fieldPath = fields[0]
    } else {
      fieldPath = new firebase.firestore.FieldPath(...fields)
    }
  }
  return collection.where(fieldPath, operator, value)
}

function findOne (collection, fields, operator, value) {
  const query = find(collection, fields, operator, value).limit(1).get()
  return query.then((querySnapshot) => {
    return querySnapshot.docs[0].data()
  })
}

function getBlogPostCollection () {
  let lang = getLanguage()
  if (lang === 'pt') {
    return ptPosts
  } else if (lang === 'de') {
    return dePosts
  }
  return posts
}

function getFromFirebase (slug) {
  if (slug) {
    return findOne(getBlogPostCollection(), ['data', 'slug'], '==', slug)
      .catch(() => { return findOne(posts, ['data', 'slug'], '==', slug) })
  }
}

function listFromButter (page = 1, page_size = 10) {
  return butter.post.list({
    page: page,
    page_size: page_size
  }).then(defaultSerializer)
}

export const blogPostService = {
  get: getFromFirebase,
  list: listFromButter
}
