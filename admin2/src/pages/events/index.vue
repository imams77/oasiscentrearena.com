<template>
  <div class="content">
    <div class="md-layout">
      <h2>Events</h2>
      <vuetable ref="vuetable"
        :data="events"
        :fields="fields"
      >
        <template slot="title" slot-scope="props">
          <div class="custom-actions">
            <router-link :to="{name: 'eventDetail', params: {id: props.rowData.id} }">{{props.rowData.title}}</router-link>
          </div>
        </template>
        <template slot="action" slot-scope="props">
          <div class="custom-actions">
            <router-link :to="{name: 'eventDetail', params: {id: props.rowData.id} }"><md-icon>edit</md-icon></router-link>
            <span @click="deleteEvent(props.rowData.id)"><md-icon>delete</md-icon></span>
          </div>
        </template>
      </vuetable>
    </div>
  </div>
</template>
<script>
import Vuetable from 'vuetable-2'
import store from '@/store/index'
export default {
  data () {
    return {
      fields: [
        {
          name: 'seq',
          title: '#',
          titleClass: 'vuetable-title'
        },
        {
          name: '__slot:title',
          title: 'Title',
          titleClass: 'vuetable-title col-sm-5'
        },
        {
          name: 'date',
          title: 'Date Created',
          titleClass: 'vuetable-title col-sm-3'
        },
        {
          name: '__slot:action',
          title: 'Action',
          titleClass: 'vuetable-title col-sm-2'
        }
      ]
    }
  },
  components: {
    Vuetable
  },
  mounted () {
    store.dispatch('events/loadEvents')
    store.commit('buttons/showFixedMenu', {name: 'dashboard'})
  },
  destroyed () {
    store.commit('buttons/hideFixedMenu')
  },
  computed: {
    events () {
      return store.state.events.events
    }
  }
}
</script>
