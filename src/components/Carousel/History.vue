<template>
    <div class="carousel">
      <card v-for='(video, index) in historyVideos' :videoData='video' :key='index' :tabindex="index+1"></card>
    </div>
</template>

<script>
import Card from './Card'
import { mapState } from 'vuex'
export default {
  name: 'history',
  data () {
    return {
      historyVideos: []
    }
  },
  components: {
    'card': Card
  },
  computed: {
    ...mapState('history', ['histories']),
    ...mapState('video', ['allVideos'])
  },
  mounted () {
    let that = this
    this.lodash.forEachRight(this.histories, function (history) {
      that.lodash.forEach(that.allVideos, function (video) {
        if (history.M.movieId.S === video.id) {
          video.playTime = history.M.playTime.S
          that.historyVideos.push(video)
        }
      })
    })
  }
}
</script>

<style lang="sass?outputStyle=expanded" scoped>
.carousel {
  display: inline;
  .jba-card {
    display: inline-flex;
    margin: 8px;
    height: 365px;
  }
}
</style>
