<template>
  <div class="breadcrumbs">
    <!-- {{breadcrumbs}} -->
    <span v-for="(breadcrumb, i) in breadcrumbs" :key="i" >
      <router-link :to="breadcrumb.link.path" class="breadcrumb oca-button">{{breadcrumb.title}} </router-link>
      <span v-if="i < breadcrumbs.length-1  "> / </span>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: 0
    }
  },
  mounted () {
    console.log(this.$route)
  },
  computed: {
    breadcrumbs () {
      let routes = this.$route.matched
      let breadcrumbs = []
      routes.map((route, i) => {
        let temp = {title: '', link: {path: '', name: ''}}
        if (route.path !== '/') {
          if (i === 0) {
            temp.title = 'Dashboard'
            temp.link.path = route.redirect || '/'
            temp.link.name = route.redirect
          } else {
            temp.title = (route.redirect && route.redirect.name) || route.name
            temp.link.path = route.redirect || route.path
            temp.link.name = route.redirect && route.redirect.name
          }
          breadcrumbs.push(temp)
        }
      })
      return breadcrumbs
      // return '231'
    }
  }
}
</script>
