<template>
  <div class="hello">
    <section class="hero is-fullheight" style="background-color : #666666">
      <div class="hero" >
        <br>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <br>
              <div class="columns is-centered">
                <div class="column is-6">
                  <label class="title is-3">ราคารวม  </label><span class="tag is-danger is-large"><label class="title is-3" style="color : #ffffff">99 ฿</label></span><br><br>
                  <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" alt="" width="100%"> <br>
                  <button type="button" name="button" style="width : 100%" class="button is-large is-success">จ่ายเงิน</button>
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
  name: 'summary',
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
