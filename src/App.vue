<template>
  <div>
    <header-view/>
    555
    <router-view/>
  </div>
</template>

<script>
import headerView from './components/header'
export default {
  name: 'app',
  components: {
    headerView
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
