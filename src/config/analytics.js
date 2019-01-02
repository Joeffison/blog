import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from './router'

const isLiveServer = process.env.NODE_ENV === 'production'

const analytics = {
  id: 'UA-76609720-3',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: false,
    sendHitTask: isLiveServer
  }
}

Vue.use(VueAnalytics, analytics)
