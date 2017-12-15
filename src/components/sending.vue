<template>
  <div class="sending">
    <section class="hero is-fullheight" style="background-color : #666666">
      <div class="hero" >
        <br>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <div class="columns">
                <div class="column is-4">
                  <img :src="caller.photoURL" alt="" width="150px">
                </div>
                <div class="column is-4">
                  <label class="title is-3">ราคา </label><br>
                  <label class="title is-4">ระยะเวลา </label><br>
                  <label class="title is-4">ชื่อลูกค้า </label>
                </div>
                <div class="column is-4">
                  <span class="tag is-danger is-large">{{calCost}} ฿</span><br>
                  <label class="title is-4">
                    {{data.Sec}} วินาที
                  </label><br>
                  <label class="title is-4">{{caller.name}}</label>
                </div>
              </div>
              <div class="columns">
                <div class="column is-half is-offset-one-quarter" >
                  <center>
                    <router-link to="/summary"><button type="button" name="button" class="button is-large is-success" @click="update()">Arrive</button></router-link>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'sending',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {
        Sec: 0,
        cost: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'lat',
      'long',
      'caller',
      'wait'
    ]),
    calCost () {
      this.data.cost = this.data.Sec * 2
      return this.data.cost
    }
  },
  methods: {
    ...mapActions([
      'bindtimerRef',
      'unbindtimerRef',
      'setTime',
      'updateState'
    ]),
    update () {
      this.setTime(this.data)
      this.updateState({
        ID: this.caller.firebaseID,
        state: 'no wait'
      })
    }
  },
  mounted () {
    setInterval(() => { this.data.Sec++ }, 1000)
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
