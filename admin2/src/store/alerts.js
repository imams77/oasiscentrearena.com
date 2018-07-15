const home = {
  namespaced: true,
  state: {
    alertContent: {
      type: '',
      title: '',
      message: ''
    },
    showAlert: false
  },
  actions: {
    //
  },
  mutations: {
    showAlert (state, payload) {
      state.showAlert = true
      state.alertContent = payload
    },
    hideAlert (state) {
      state.showAlert = false
    },
    emptyAlert (state) {
      state.alertContent = {
        type: '',
        title: '',
        message: ''
      }
    }
  }
}

export default home
