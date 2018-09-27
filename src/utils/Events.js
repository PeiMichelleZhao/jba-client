import Vue from 'vue'

// eslint-disable-next-line
window.Events = new class {
  constructor () {
    this.vue = new Vue()
  }

  fire (event, data) {
    this.vue.$emit(event, data)
  }

  listen (event, callback) {
    this.vue.$off(event)
    this.vue.$on(event, callback)
  }
}
