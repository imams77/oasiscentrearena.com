<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/">
        <md-icon>home</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'websites'}">
        <md-icon>view_quilt</md-icon>
        <p>Web Pages</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'events'}">
        <md-icon>rss_feed</md-icon>
        <p>Events</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'images'}">
        <md-icon>image</md-icon>
        <p>Images</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'locations'}">
        <md-icon>room</md-icon>
        <p>Location</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/modules/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}

</script>
