<template>
  <div class="fixed-menu-button" v-if="fixedMenu && fixedMenu.show">
    <router-link :to="fixedMenu.link"><md-icon>add</md-icon></router-link>
  </div>
</template>
<script>
import store from '@/store'
export default {
  computed: {
    fixedMenu () {
      return store.state.buttons.fixedMenu
    }
  }
}
</script>
