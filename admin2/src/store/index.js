import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import events from './events'
import buttons from './buttons'
import auth from './auth'
import alerts from './alerts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    buttons,
    events,
    auth,
    alerts
  }
})

export default store
