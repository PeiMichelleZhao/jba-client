<template>
  <div>
    <jba-menu></jba-menu>
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from './carousel/Carousel'
import JbaMenu from './utils/JbaMenu'

export default {
  name: 'Homepage',
  data () {
    return {
    }
  },
  components: {
    'carousel': Carousel,
    'jba-menu': JbaMenu
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
