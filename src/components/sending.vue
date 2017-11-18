<template>
  <div class="sending">
    <section class="hero is-fullheight" style="background-color : #666666">
      <div class="hero" >
        <br>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <div class="columns">
                <img src="http://www.travelanium.com/parindahotel/images/thumb-map-gg.jpg" alt="">
              </div>
              <div class="columns">
                <div class="column is-4">
                  <img src="https://media.giphy.com/media/l0ErJPn84pg92DDgY/giphy.gif" alt="" width="150px">
                </div>
                <div class="column is-4">
                  <label class="title is-3">ราคา </label><br>
                  <label class="title is-4">ระยะเวลา </label><br>
                  <label class="title is-4">ชื่อลูกค้า </label>
                </div>
                <div class="column is-4">
                  <span class="tag is-success is-large"><label class="title is-3">99 ฿</label></span><br>
                  <label class="title is-4">12:59 นาที</label><br>
                  <label class="title is-4">แทยอน</label>
                </div>
              </div>
              <div class="columns">
                <div class="column is-half is-offset-one-quarter" >
                  <center>
                    <button type="button" name="button" class="button is-large is-danger">Arrive ( summary )</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sending',
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
