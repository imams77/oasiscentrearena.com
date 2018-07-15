const breadcrumbs = {
  namespaced: true,
  state: {
    slideshow: {}
  },
  actions: {
    getHome: async function (context, payload) {
      api.ref('home').on('value', (response) => {
        console.log(response)
        context.commit('getSlideshow', response)
      })
    }
  },
  mutations: {
    getSlideshow (state, payload) {
      state.slideshow = payload
    }
  }
}

export default breadcrumbs