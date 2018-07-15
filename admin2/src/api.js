import Vue from 'vue'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFire from 'vuefire'

Vue.use(VueFire)
var config = {
  apiKey: 'AIzaSyD6Ia0zEUDL1X6sPZoRB0FJVUi_SrZUuw4',
  authDomain: 'oasis-centre-arena.firebaseapp.com',
  databaseURL: 'https://oasis-centre-arena.firebaseio.com',
  projectId: 'oasis-centre-arena',
  storageBucket: 'oasis-centre-arena.appspot.com',
  messagingSenderId: '359815397824'
}
let app = firebase.initializeApp(config)
const settings =
  {
    timestampsInSnapshots: true
  }
// let api = app.database()
let api = app.firestore()
api.settings(settings)

export default api