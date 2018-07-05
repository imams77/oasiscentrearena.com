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
      <sidebar-link :to="{name: 'news'}">
        <md-icon>rss_feed</md-icon>
        <p>News</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'images'}">
        <md-icon>image</md-icon>
        <p>Images</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'locations'}">
        <md-icon>room</md-icon>
        <p>Location</p>
      </sidebar-link>
      <!-- <sidebar-link :to="{name: 'academy'}">
        <md-icon>content_paste</md-icon>
        <p>Academy</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Ocapass</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Facilities</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Events & Promotions</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Contact</p>
      </sidebar-link> -->
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
