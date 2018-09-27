<template>
  <modal name="playerModal"
         :width="800"
         :height="450"
         @before-open="beforeOpen"
         @opened="opened"
         @before-close="beforeClose">
  <video
    id="jba-video" ref="player"
    class="video-js jba-video" controls preload="auto" autoplay>
    </video>
  </modal>
</template>
<script>
export default {
  name: 'player-modal',
  data () {
    return {
      videoUrl: ''
    }
  },
  methods: {
    beforeOpen (event) {
      this.videoUrl = event.params.videoUrl
    },
    opened () {
      // eslint-disable-next-line
      this.player = videojs(this.$refs.player, {
        sources: [ { src: this.videoUrl, type: 'video/mp4' } ]
      })

      this.player.play()
      this.player.requestFullscreen()
    },
    beforeClose (event) {
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.jba-video{
    width: 100%;
    height: 100%;
}
</style>
