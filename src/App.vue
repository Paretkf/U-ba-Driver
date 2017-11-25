<template>
  <div>
    <aaa/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import headerView from './components/header'

export default {
  name: 'app',
  components: {
    aaa: headerView
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([
      'init'
    ])
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
