<template>
  <div class="jba-card" @click="playVideo" @keyup="keyAction">
    <div>
      <img :src='videoData.images[0].url' />
      <span v-text='videoData.title'></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['videoData', 'cardIndex'],
  data () {
    return {
    }
  },
  methods: {
    playVideo () {
      // eslint-disable-next-line
      Events.fire('play-video', {videoUrl: this.videoData.contents[0].url})
      // this.$modal.show('playerModal', {videoUrl: this.videoData.contents[0].url})
      // eslint-disable-next-line
      Events.fire('record-play', {movieId: this.videoData.id})
    },
    keyAction (event) {
      if (event.keyCode === 37 || event.keyCode === 38) {
        if (this.cardIndex > 0) {
          this.$parent.$children[this.cardIndex - 1].$el.focus()
        }
      } else if (event.keyCode === 39 || event.keyCode === 40) {
        if (this.cardIndex < (this.$parent.$children.length - 1)) {
          this.$parent.$children[this.cardIndex + 1].$el.focus()
        }
      } else if (event.keyCode === 13) {
        this.playVideo()
      }
    }
  }
}
</script>

<style scoped>
.jba-card {
  width: 214px;
  cursor: pointer;
}
</style>
