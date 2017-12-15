<template>
  <div class="calling">
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      <br>
       <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <div class="columns">
                <gmap-map :center="center" :zoom="10" style="width: 500px; height: 300px">
                  <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position">
                    {{m.me}}
                  </gmap-marker>
                </gmap-map>
              </div>
             <div class="columns">
                <div class="column is-half is-offset-one-quarter" >
                  <center>
                    {{caller.firebaseID}}
                    {{lat}} : {{long}}
                    <router-link to="/driving">
                      <button type="button" name="button" class="button is-large is-success" >ยอมรับ</button>
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
      'wait'
    ])
  },
  methods: {
    ...mapActions([
      'bindcallRef',
      'unbindcallRef',
      'updateState'
    ]),
    update () {
      this.updateState(this.caller.firebaseID)
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
