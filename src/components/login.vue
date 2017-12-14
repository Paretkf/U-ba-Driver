<template>
  <div>
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      
       <div class="container">
         <br><br><br>
          <div class="columns is-centered">
            <div class="column is-4 box">
              <button class="button is-large is-success" style="width : 100%; height :100%" @click="newDri">login </button>
            </div>
         </div>
       </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
  },
  methods: {
    ...mapActions([
      'login',
      'newDriver',
      'binddriverRef',
      'unbinddriverRef'
    ]),
    async newDri () {
      this.$store.dispatch('login')
      this.$router.push({path: '/start'})
    }
  },
  created () {
    this.binddriverRef()
  },
  destroyed () {
    this.unbinddriverRef()
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
