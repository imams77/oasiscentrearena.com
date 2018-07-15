<template>
  <div class="alert-container" :class="[alertContent.type, {active: showAlert}]">
    <div class="title">{{alertContent.title}}</div>
    <div class="content">{{alertContent.message}}</div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    showAlert () {
      return store.state.alerts.showAlert
    },
    alertContent () {
      return store.state.alerts.alertContent
    }
  },
  watch: {
    showAlert (status) {
      if (status) {
        setTimeout(() => {
          store.commit('alerts/hideAlert')
        }, 2000)
        setTimeout(() => {
          store.commit('alerts/emptyAlert')
        }, 3000)
      }
    }
  }

}
</script>
