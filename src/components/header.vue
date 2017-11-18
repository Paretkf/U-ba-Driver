<template>
    <div class='hello'>
        <!-- <section class="hero is-bold"style="background-color : #FF0000;height: 100px">
          <div class="hero-header">
            <div class="container">
              <img src="../../build/logo.png" alt="" width="100px">
            </div>
          </div>
        </section> -->
        <nav class="navbar is-transparent is-info"  style="height: 100px">
          <div class="navbar-brand ">
            <img src="build\logo.png" width="10%">
            <div class="navbar-item">
              <label class="title is-2" style="color : #FFFFFF">U-ba Driver</label>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <img src="https://www.khaosod.co.th/upload/files/1452254625_%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%871.jpg">
              <span class="tag is-info is-large">เก่ง เกียร์R</span>
              <button type="button" class="button is-danger" name="button">Log out</button>
            </div>
          </div>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
