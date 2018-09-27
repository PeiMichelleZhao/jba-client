import Vue from 'vue'

Vue.mixin({
  data: function () {
    return {
      get apiUrl () {
        return 'https://5hcvigg9je.execute-api.ap-southeast-2.amazonaws.com/dev/jba/history'
      }
    }
  }
})
