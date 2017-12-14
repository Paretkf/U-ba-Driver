<template>
  <div>
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      
       <div class="container">
         <br><br><br>
          <div class="columns is-centered">
            <div class="column is-6 box">
              <img :src="user.fb.photoURL" alt="">
              {{user.displayName}}
              <div v-if="user != null">
                พิกัด ละติจูด{{lati}} : ลองติจูด{{longi}}
              <router-link to="index">
                
              <button class="button is-large is-success" style="width : 100%;" @click="addNew()">เริ่มรับลูกค้า</button>
              </router-link>
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
  data () {
    return {
      lati: 0,
      longi: 0
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'isReady'
    ])
  },
  mounted () {
    this.getlo()
  },
  methods: {
    ...mapActions([
      'logout',
      'newDriver',
      'setCoods'
    ]),
    addNew () {
      // let data = {
      //   displayName: this.user.displayName,
      //   fb: this.user.fb,
      //   uid: this.user.uid,
      //   coords: {
      //     lat: this.lati,
      //     long: this.longi
      //   }
      // }
      // this.newDriver(data)
      this.setCoods({
        lat: this.lati,
        long: this.longi
      })
    },
    getlo () {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    },
    showPosition (position) {
      this.longi = position.coords.longitude
      this.lati = position.coords.latitude
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
