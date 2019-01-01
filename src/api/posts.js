import Butter from 'buttercms'

const butterToken = 'facebee4e5677c69a53be01fc172e9d1ea6d4744'
const butter = Butter(butterToken)

function defaultSerializer (response) {
  return response.data
}

export const blogPostService = {
  get: function (slug) {
    return butter.post.retrieve(slug).then(defaultSerializer)
  },
  list: function (page = 1, page_size = 10) {
    return butter.post.list({
      page: page,
      page_size: page_size
    }).then(defaultSerializer)
  }
}
