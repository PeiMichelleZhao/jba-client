<template>
  <div>
    <jba-menu></jba-menu>
    <history v-if="histories.length > 0 && allVideos.length > 0"></history>
    <div v-if="histories.length < 0 || allVideos.length < 0">
    <span>No history.</span>
    </div>
  </div>
</template>

<script>
import History from './carousel/History'
import JbaMenu from './utils/JbaMenu'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PlayHistory',
  data () {
    return {
    }
  },
  components: {
    'history': History,
    'jba-menu': JbaMenu
  },
  methods: {
    ...mapActions('history', ['forceLoadHistories']),
    ...mapActions('video', ['loadVideos'])
  },
  computed: {
    ...mapState('history', ['histories']),
    ...mapState('video', ['allVideos'])
  },
  mounted () {
    this.loadVideos()
    this.forceLoadHistories({userId: this.getUserId()})
  }
}
</script>

<style scoped>
</style>
