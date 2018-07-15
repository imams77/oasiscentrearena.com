import api from '@/api.js'
const home = {
  namespaced: true,
  state: {
    events: []
  },
  actions: {
    loadEvents: async function (context) {
      console.log('LOAD')
      api.collection('events').get().then(response => {
        let temp = []
        let seq = 0
        response.forEach((doc) => {
          seq += 1
          let tempData = doc.data()
          tempData['id'] = doc.id
          tempData['seq'] = seq
          temp.push(tempData)
        })
        context.commit('getEvents', temp)
      })
    }
  },
  mutations: {
    getEvents (state, payload) {
      let events = Object.assign([], payload)
      events.map(event => {
        let tempDate = new Date(event.date.seconds * 1000)
        console.log(tempDate)
        event.date = tempDate
      })
      state.events = events
    }
  }
}

export default home
