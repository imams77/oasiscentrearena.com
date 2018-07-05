// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
// import firebase from 'firebase'
// import VueFire from 'vuefire'
import 'firebase/firestore'

// Plugins
import GlobalComponents from './plugins/globalComponents'
import GlobalDirectives from './plugins/globalDirectives'
import MaterialDashboard from './plugins/material-dashboard'
import Notifications from './components/NotificationPlugin'

import './assets/sass/main.sass'

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

// firebase configuration

/* eslint-disable no-new */
new Vue({
  el: '#oca-admin',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
