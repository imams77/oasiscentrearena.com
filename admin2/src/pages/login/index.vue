<template>
  <div id="login-form">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Insert your Email">
    <input type="password" v-model="password" placeholder="Insert your Password">
    <button @click="login">Login</button>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      /* eslint-disable */
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((response) => {
        console.log(response)
        this.$router.replace('home')
      }).catch(error => {
        console.log('ERROR MESSAGE', error)
      })
    }
  }
}
</script>
