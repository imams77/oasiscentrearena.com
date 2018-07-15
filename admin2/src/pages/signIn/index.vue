<template>
  <div id="login-form">
    <div class="form-container">
      <h3>Sign In</h3>
      <input type="text" @keyup.enter="signIn" v-model="email" placeholder="Insert your Email">
      <input type="password" v-model="password" placeholder="Insert your Password" @keyup.enter="signIn">
      <button @click="signIn">Sign In</button>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      let payload = {
        // email: this.email,
        // password: this.password
        email: 'admin@oasiscentrearena.com',
        password: 'adminOasis2018'
      }
      store.dispatch('auth/signIn', payload)
    }
  }
}
</script>
