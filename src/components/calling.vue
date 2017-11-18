<template>
  <div class="calling">
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      <br>
       <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 box">
              <div class="columns">
                <img src="http://www.travelanium.com/parindahotel/images/thumb-map-gg.jpg" alt="" width="100%">
              </div>
             <div class="columns">
                <div class="column is-half is-offset-one-quarter" >
                  <center>
                    <button type="button" name="button" class="button is-large is-danger">ยอมรับ</button>
                    <button type="button" name="button" class="button is-large is-danger">ไม่ยอมรับ</button>
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
export default {
  name: 'calling',
  data () {
    return {
      msg: 'Header'
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
