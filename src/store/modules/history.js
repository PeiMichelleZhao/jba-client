
import Vue from 'vue'
const state = {
  hasHistory: false,
  histories: []
}

const getters = {

}

const actions = {
  loadHistories (context, data) {
    if (!state.hasHistory) {
      let api = 'https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history?userId=' + data.userId
      Vue.axios.get(api).then((response) => {
        context.commit('setHistories', response.data)
      })
    }
  },
  forceLoadHistories (context, data) {
    let api = 'https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history?userId=' + data.userId
    Vue.axios.get(api).then((response) => {
      context.commit('setHistories', response.data)
    })
  }
}

const mutations = {
  setHistories (state, userInfo) {
    if (userInfo && userInfo.plays) {
      state.hasHistory = true
      state.histories = userInfo.plays.L
    } else {
      state.hasHistory = false
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
