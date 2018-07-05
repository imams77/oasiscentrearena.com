import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import 'firebase/firestore'

import App from './App.vue'
import { routes } from './routes'

// Plugins
import GlobalComponents from './plugins/globalComponents'
import GlobalDirectives from './plugins/globalDirectives'
import MaterialDashboard from './plugins/material-dashboard'
import Notifications from './components/NotificationPlugin'

import './assets/sass/main.sass'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFire)
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

const router = new VueRouter({
  routes
})

// firebase configuration
var config = {
  apiKey: "AIzaSyD6Ia0zEUDL1X6sPZoRB0FJVUi_SrZUuw4",
  authDomain: "oasis-centre-arena.firebaseapp.com",
  databaseURL: "https://oasis-centre-arena.firebaseio.com",
  projectId: "oasis-centre-arena",
  storageBucket: "oasis-centre-arena.appspot.com",
  messagingSenderId: "359815397824"
};
firebase.initializeApp(config);

export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount('#oca-admin')
