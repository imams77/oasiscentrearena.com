import Vue from 'vue'
import Router from 'vue-router'

import DashboardLayout from '@/modules/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/dashboard/index.vue'
import Events from '@/pages/events/index.vue'
import Websites from '@/pages/websites/index.vue'
import Website from '@/pages/websites/website/index.vue'
import Images from '@/pages/images/index.vue'
import Locations from '@/pages/locations/index.vue'
import SignIn from '@/pages/signIn/index.vue'

// website
import WebHome from '@/pages/websites/website/home/index.vue'
import TicketingPricing from '@/pages/websites/website/ticketing_pricing/index.vue'
import Academy from '@/pages/websites/website/academy/index.vue'
import Ocapass from '@/pages/websites/website/ocapass/index.vue'
import Facilities from '@/pages/websites/website/facilities/index.vue'
import Promotions from '@/pages/websites/website/promotions/index.vue'
import Contact from '@/pages/websites/website/contact/index.vue'

// submenu academy
import Athletes from '@/pages/websites/website/academy/athletes/index.vue'
import Coaches from '@/pages/websites/website/academy/coaches/index.vue'
import PriceTable from '@/pages/websites/website/academy/price_table/index.vue'
import RulesRegulations from '@/pages/websites/website/academy/rules_regulations/index.vue'
import Sports from '@/pages/websites/website/academy/sports/index.vue'

// DETAIL
import EventComponent from '@/pages/event/index.vue'
import EventDetail from '@/pages/event/detail.vue'

// MENU CHILDRENS
// Home
import HomeSlideshow from '@/pages/websites/website/home/slideshow/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      component: DashboardLayout,
      path: '/',
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'websites',
          name: 'websites',
          component: Websites
        },
        {
          path: 'website',
          name: 'website',
          redirect: {name: 'websites'},
          component: Website,
          children: [
            {
              path: 'web_home',
              name: 'web_home',
              component: WebHome,
              children: [
                {
                  path: 'slideshow',
                  name: 'home_slideshow',
                  component: HomeSlideshow
                }
              ]
            },
            {
              path: 'ticketing_pricing',
              name: 'ticketing_pricing',
              component: TicketingPricing
            },
            {
              path: 'academy',
              name: 'academy',
              component: Academy,
              children: [
                {
                  path: 'athletes',
                  name: 'athletes',
                  component: Athletes
                },
                {
                  path: 'coaches',
                  name: 'coaches',
                  component: Coaches
                },
                {
                  path: 'price_table',
                  name: 'price_table',
                  component: PriceTable
                },
                {
                  path: 'rules_regulations',
                  name: 'rules_regulations',
                  component: RulesRegulations
                },
                {
                  path: 'sports',
                  name: 'sports',
                  component: Sports
                }
              ]
            },
            {
              path: 'ocapass',
              name: 'ocapass',
              component: Ocapass
            },
            {
              path: 'facilities',
              name: 'facilities',
              component: Facilities
            },
            {
              path: '/promotions',
              name: 'promotions',
              component: Promotions
            },
            {
              path: '/contact',
              name: 'contact',
              component: Contact
            }
          ]
        },
        {
          path: '/events',
          name: 'events',
          component: Events
        },
        {
          path: '/event/',
          name: 'event',
          redirect: {name: 'events'},
          component: EventComponent,
          children: [
            {
              path: ':id',
              name: 'eventDetail',
              component: EventDetail
            }
          ]
        },
        {
          path: 'images',
          name: 'images',
          component: Images
        },
        {
          path: 'locations',
          name: 'locations',
          component: Locations
        }
      ]
    },
    {
      path: '/sign-in',
      component: SignIn
    }
  ]
})
