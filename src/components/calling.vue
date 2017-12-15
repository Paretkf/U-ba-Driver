<template>
  <div class="calling">
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      <br><br><br>
       <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <br>
              <div class="columns is-centered">
                <gmap-map :center="center" :zoom="10" style="width: 500px; height: 300px">
                  <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
                  </gmap-marker>
                </gmap-map>
              </div>
             <div class="columns">
                <div class="column  " >
                  <center>
                    <div class="columns is-centered">
                      <div class="column is-3">
                        <img :src="caller.photoURL" alt="" style="border-radius : 50%;width : 66px;height : 66px" >
                      </div>
                      <div class="column is-5">
                        <br>
                        <label class="title is-4">{{caller.name}}</label>
                      </div>
                    </div>
                    <router-link to="/driving">
                      <button type="button" name="button" class="button is-large is-success" @click="update()">{{back}}</button>
                    </router-link>
                    <router-link to="/start">
                      <button type="button" name="button" class="button is-large is-danger">ไม่ยอมรับ</button>
                    </router-link>
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
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAdTt1CEiELNaqxvQl7sgeHnpy9VskiosY'
  }
})
export default {
  name: 'calling',
  data () {
    return {
      msg: 'Header',
      center: {},
      markers: [{
        position: {}
      }]
    }
  },
  computed: {
    ...mapGetters([
      'lat',
      'long',
      'caller',
      'wait',
      'user'
    ]),
    back () {
      this.setCaller()
      if (this.caller.state === 'wait') {
        return 'ยอมรับ'
      } else {
        this.$router.push({path: '/index'})
        return ''
      }
    }
  },
  methods: {
    ...mapActions([
      'bindcallRef',
      'unbindcallRef',
      'updateState',
      'updateDriver',
      'setCaller'
    ]),
    update () {
      this.updateState({
        ID: this.caller.firebaseID,
        state: 'driving'
      })
      this.updateDriver({
        ID: this.caller.firebaseID,
        driver: this.user
      })
    }
  },
  mounted () {
    this.center = {
      lat: this.caller.Latitude,
      lng: this.caller.Longitude
    }
    this.markers = [{
      position: {
        lat: this.caller.Latitude,
        lng: this.caller.Longitude
      }
    }]
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
