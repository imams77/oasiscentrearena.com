<template>
  <div class="content">
    <div class="md-layout">
      {{slides}} ssss
      asdasdasd
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  mounted () {
    store.dispatch('home/loadSlideshow')
  },
  computed: {
    slides () {
      return store.state.home.slideshow
    }
  }
}
</script>
