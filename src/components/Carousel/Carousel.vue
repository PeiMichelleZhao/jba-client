<template>
  <div class="carousel">
    <card v-for='(video,index) in allVideos'
          :videoData='video' :cardIndex='index'
          :key='index' :tabindex='index+1'>
          </card>
  </div>
</template>

<script>
import Card from './Card'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Carousel',
  data () {
    return {
    }
  },
  components: {
    'card': Card
  },
  methods: {
    ...mapActions('video', ['loadVideos'])
  },
  computed: {
    ...mapState('video', ['allVideos'])
  },
  mounted () {
    this.loadVideos()
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
