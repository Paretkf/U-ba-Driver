<template>
  <div class="sending">
    <section class="hero is-fullheight" style="background-color : #666666">
      <div class="hero" >
        <br><br>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <div class="columns">
                <div class="column is-4">
                  <img :src="caller.photoURL" alt="" width="150px">
                </div>
                <div class="column is-3">
                  <span class="tag is-info is-medium"><b>ราคา </b></span><br><br>
                  <span class="tag is-success is-medium">ระยะเวลา </span><br><br>
                  <span class="tag is-primary is-medium">ชื่อลูกค้า </span>
                </div>
                <div class="column is-4">
                  <label class="title is-4">{{calCost}} ฿</label><br><br>
                  <label class="title is-4">{{data.Sec}} วินาที</label><br><br>
                  <label class="subtitle is-4">{{caller.name}}</label>
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
      if (this.caller.state === 'driving') {
        this.updateTimeCost({
          ID: this.caller.firebaseID,
          state: this.caller.state,
          cost: this.data.cost,
          time: this.data.Sec
        })
      }
      return this.data.cost
    }
  },
  methods: {
    ...mapActions([
      'bindtimerRef',
      'unbindtimerRef',
      'setTime',
      'updateState',
      'updateTimeCost'
    ]),
    update () {
      this.setTime(this.data)
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
