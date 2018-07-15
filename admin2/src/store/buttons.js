const buttons = {
  namespaced: true,
  state: {
    fixedMenu: {
      show: false,
      link: ''
    }
  },
  mutations: {
    showFixedMenu: function (state, payload) {
      state.fixedMenu.link = payload
      state.fixedMenu.show = true
    },
    hideFixedMenu: function (state) {
      state.fixedMenu.link = false
      state.fixedMenu.show = false
    }
  }
}

export default buttons
