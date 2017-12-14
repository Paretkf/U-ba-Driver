<template>
  <div>
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      
       <div class="container">
         <br><br><br>
          <div class="columns is-centered">
            <div class="column is-4 box">
              <router-link to="index">
               <button class="button is-large is-success" style="width : 100%; height :100%" @click="login">login </button>
              </router-link>
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
  computed: {
    ...mapGetters([
      'user',
      'isReady'
    ])
  },
  methods: {
    ...mapActions([
      'login'
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
