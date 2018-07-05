import Vue from 'vue'
import 'firebase/firestore'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)
// firebase configuration
// var config = {
//   apiKey: "AIzaSyD6Ia0zEUDL1X6sPZoRB0FJVUi_SrZUuw4",
//   authDomain: "oasis-centre-arena.firebaseapp.com",
//   databaseURL: "https://oasis-centre-arena.firebaseio.com",
//   projectId: "oasis-centre-arena",
//   storageBucket: "oasis-centre-arena.appspot.com",
//   messagingSenderId: "359815397824"
// };
// firebase.initializeApp(config);

export const db = firebase.firestore()