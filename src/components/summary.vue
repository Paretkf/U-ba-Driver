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
                  <label class="title is-3">ราคารวม  </label>
                  <span class="tag is-danger is-large">
                    <label class="title is-3" style="color : #ffffff">{{money}} ฿</label>
                  </span><br>
                  <label class="title is-4">เวลา  </label>
                  <span class="tag is-warning is-large">
                    <label class="title is-4" style="color : #ffffff">{{sec}} วินาที</label>
                  </span>
                  <br><br>
                  <img src="https://media.giphy.com/media/l2QDVwaaqvZGr834c/giphy.gif" alt="" width="100%"> <br>
                  <router-link to="/start">
                    <button type="button" name="button" style="width : 100%" class="button is-large is-success">จ่ายเงิน</button>
                  </router-link>
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
import { mapGetters } from 'vuex'
export default {
  name: 'summary',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'sec',
      'money'
    ])
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
