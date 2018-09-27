<template>
  <b-container fluid class="header">
    <b-row>
      <b-col cols="4">
        <span class="jba-menu"  @click="gotoHome">Home</span>
      </b-col>
      <b-col cols="4">
      </b-col>
      <b-col cols="4">
        <span class="jba-menu" @click="gotoHistory">History</span>
      </b-col>
    </b-row>
    <player></player>
    <player-modal></player-modal>
  </b-container>
</template>

<script>
import Player from './Player'
import PlayerModal from './PlayerModal'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'jba-menu',
  data () {
    return {
    }
  },
  components: {
    'player': Player,
    'player-modal': PlayerModal
  },
  methods: {
    gotoHome () {
      this.$router.push('/')
    },
    gotoHistory () {
      this.$router.push('play-history')
    },
    recordPlay (movieId) {
      let that = this
      if (!this.hasHistory) {
        this.axios.post(this.apiUrl, {
          userId: that.getUserId(),
          movieId: movieId
        })
          .then((response) => {
            that.forceLoadHistories({userId: that.getUserId()})
          })
      } else {
        this.axios.put(this.apiUrl, {
          userId: that.getUserId(),
          movieId: movieId
        })
          .then((response) => {
          })
      }
    },
    ...mapActions('history', ['loadHistories', 'forceLoadHistories'])
  },
  computed: {
    ...mapState('history', ['hasHistory'])
  },
  mounted () {
    this.loadHistories({userId: this.getUserId()})
  },
  created () {
    let that = this
    // eslint-disable-next-line
    Events.listen('record-play', function (data) {
      that.recordPlay(data.movieId)
    })
  }
}
</script>

<style scoped>
.jba-menu {
  cursor: pointer;
}
.header{
  background-color:grey;
  height:30px;
  width:100%;
  color:white;
  fon-size:1.2em;
  margin:5px;
  padding-top:5px;
  padding-bottom:5px;
}
</style>
