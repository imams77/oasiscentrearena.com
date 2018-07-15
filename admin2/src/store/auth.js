import firebase from 'firebase'
import router from '@/router/index'
const auth = {
  namespaced: true,
  actions: {
    logout: function (state, payload) {
      firebase.auth()
        .signOut()
        .then((resp) => {
          sessionStorage.clear()
          router.push('sign-in')
        })
    },
    signIn: function (context, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then((response) => {
        response.user.getIdToken().then(res => {
          sessionStorage.setItem('jwt', res)
        })
        router.push('/')
      }).catch(error => {
        let alert = {
          type: 'error',
          title: 'Error',
          message: error.message
        }
        context.commit('alerts/showAlert', alert, {root: true})
      })
    }
  }
}

export default auth
