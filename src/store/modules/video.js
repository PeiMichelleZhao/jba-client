
import Vue from 'vue'
const state = {
  allVideos: []
}

const getters = {

}

const actions = {
  loadVideos (context) {
    if (state.allVideos.length === 0) {
      let api = 'https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos'
      Vue.axios.get(api).then((response) => {
        context.commit('setVideos', response.data)
      })
    }
  }
}

const mutations = {
  setVideos (state, videoInfo) {
    if (videoInfo && videoInfo.source && videoInfo.source.videos && videoInfo.source.videos.entries) {
      state.allVideos = videoInfo.source.videos.entries
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
