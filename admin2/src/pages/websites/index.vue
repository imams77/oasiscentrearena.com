<template>
  <div class="content">
    <div class="md-layout">
      <h2>Websites</h2>
      <div class="website-lists">
        <ul class="oca-square-lists">
          <li v-for="(web, i) in webList" :key=i>
            <router-link :to="{name: web.link}">
              <div class="list-container">
                <span class="icon">
                  <md-icon class="md-size-4x">{{web.icon}}</md-icon>
                </span>
                <span>{{web.title}}</span>
              </div>
            </router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    webList () {
      return [
        {
          title: 'Homepage',
          icon: 'home',
          link: 'web_home'
        },
        {
          title: 'Ticketing & Pricing',
          icon: 'account_balance_wallet',
          link: 'ticketing_pricing'
        },
        {
          title: 'Academy',
          icon: 'school',
          link: 'academy',
          children: [
            {
              title: 'Price Table',
              icon: 'attach_money',
              link: 'price_table'
            },
            {
              title: 'Sports',
              icon: 'ac_unit',
              link: 'sports'
            },
            {
              title: 'Coach Profile',
              icon: 'supervisor_account',
              link: 'coaches'
            },
            {
              title: 'Athlete Training Programme',
              icon: 'fitness_center',
              link: 'athletes'
            },
            {
              title: 'Rules & Regulations',
              icon: 'announcement',
              link: 'rules_regulations'
            }
          ]
        },
        {
          title: 'Ocapass',
          icon: 'card_membership',
          link: 'ocapass'
        },
        {
          title: 'Facilities',
          icon: 'redeem',
          link: 'facilities'
        },
        {
          title: 'Promotions',
          icon: 'event',
          link: 'promotions'
        },
        {
          title: 'Contact',
          icon: 'phone',
          link: 'contact'
        }
      ]
    }
  }
}
</script>
