<template>
  <video
    id="my-video" ref="player"
    class="video-js jba-video" preload="auto">
    </video>
</template>
<script>
export default {
  name: 'player',
  data () {
    return {
      videoUrl: ''
    }
  },
  methods: {
    playerInitialize () {
      let that = this
      if (this.videoPlayer) {
        this.videoPlayer.src([ { src: this.videoUrl, type: 'video/mp4' } ])
      } else {
        // eslint-disable-next-line
        this.videoPlayer = videojs(this.$el, {
          sources: [ { src: this.videoUrl, type: 'video/mp4' } ]
        },
        function () {
          this.on('ended', function () {
            that.minimizeScreen()
          })
          this.on('fullscreenchange', function () {
            if (typeof this.isFullScreen === 'undefined') {
              this.isFullScreen = false
            } else {
              this.isFullScreen = !this.isFullScreen
            }
            if (!this.isFullScreen) {
              that.minimizeScreen()
            }
          })
        })
      }
    },
    minimizeScreen () {
      this.videoPlayer.pause()
      this.videoPlayer.exitFullscreen()
      // this.videoPlayer.dispose()
      // this.videoPlayer = null
    }
  },
  mounted () {
  },
  created () {
    let that = this
    // eslint-disable-next-line
    Events.listen('play-video', function (data) {
      that.videoUrl = data.videoUrl
      that.playerInitialize()
      that.videoPlayer.play()
      that.videoPlayer.requestFullscreen()
    })
  }
}
</script>

<style scoped>
  .jba-video{
    width: 0;
    height: 0;
  }
</style>
