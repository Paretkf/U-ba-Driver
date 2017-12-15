<template>
  <div class="hello">
  <section class="hero is-info is-fullheight">
  <div class="hero-body" style="background-color : #666666">
    <div class="container">
      <h1 class="title">
        <center><img src="https://media.giphy.com/media/l2QDVwaaqvZGr834c/giphy.gif" alt="" width="25%"></center>
        <center>
          <router-link to="/start">
            <!-- <button class="button is-danger">{{next}}</button> -->
            <button class="button is-danger">{{next}}</button>
          </router-link>
        </center>
      </h1>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'lat',
      'long',
      'caller',
      'wait'
    ]),
    next () {
      // var a = setInterval(() => { this.setCaller() }, 3000)
      this.setCaller()
      if (this.caller.state === 'wait') {
        this.$router.push({path: '/calling'})
        return 'เจอแล้ว'
      } else {
        return 'Back'
      }
    }
  },
  methods: {
    ...mapActions([
      'bindcallRef',
      'unbindcallRef',
      'setCaller'
    ]),
    discon () {
      this.logout()
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
