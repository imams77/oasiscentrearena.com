// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import 'firebase/firestore'
import jwtDecode from 'jwt-decode'
// Plugins
import GlobalComponents from './plugins/globalComponents'
import GlobalDirectives from './plugins/globalDirectives'
import MaterialDashboard from './plugins/material-dashboard'
import Notifications from './components/NotificationPlugin'
import './assets/sass/main.sass'

// Components
import Breadcrumbs from '@/components/Breadcrumbs/index.vue'
import FixedMenuButton from '@/components/Buttons/fixedMenuButton.vue'
import Alert from '@/components/Alerts/index.vue'

Vue.component('breadcrumbs', Breadcrumbs)
Vue.component('fixed-buttons', FixedMenuButton)
Vue.component('alert', Alert)

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(VueFire)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
// eslint-disable-next-line
// global library setup
// Object.defineProperty(Vue.prototype, '$Chartist', {
//   get () {
//     return this.$root.Chartist
//   }
// })

// firebase auth
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // console.log('RESQ', currentUser, requiresAuth)
  let cookie = sessionStorage.getItem('jwt')
  if (cookie) {
    let unixDate = Math.round((new Date()).getTime() / 1000)
    let decode = jwtDecode(cookie)
    if ((decode.exp + (24 * 60 * 60)) < unixDate) {
      sessionStorage.clear()
      next('/sign-in')
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        
      })
      next()
    }
  } else {
    if (!currentUser && to.path !== '/sign-in' && requiresAuth) {
      next('/sign-in')
    } else if (requiresAuth) {
      next('/sign-in')
    } else if (!currentUser && to.path !== '/sign-in') {
      next('/sign-in')
    } else if (to.path === '/sign-in' && !requiresAuth && currentUser) {
      next('/')
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#oca-admin',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
