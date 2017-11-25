<template>
  <div class='cccc'>
    <div class="navbar is-transparent is-info"  style="height: 100px">
      <div class="navbar-brand ">
        <img src="build\logo.png" width="10%">
        <div class="navbar-item">
          <label class="title is-2" style="color : #FFFFFF">U-ba Driver</label>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="!isReady">
            <img :src="user.fb.photoURL" alt="">
            {{user.displayName}}
          </div>
          <div v-if="isLogin">
            Loading...
          </div>
          <div v-if="isReady">
            <button type="button" class="button is-danger" name="button" @click="login()">Log in</button>
          </div>
          <div v-if="!isReady">
            <button type="button" class="button is-danger" name="button" @click="logout()">Log out</button>
          </div>
        </div>
      </div>
    </div>
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
      'login',
      'logout'
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
