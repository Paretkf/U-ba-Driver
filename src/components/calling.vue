<template>
  <div class="hello">
    <section class="hero is-fullheight"  style="background-color : #666666">
      <div class="hero">
      <br>
       <div class="container">
         <div class="columns is-centered">
           <div class="column is-6 box">
             <div class="columns">
               <img src="https://f.ptcdn.info/072/031/000/1430903433-F8MONSTER2-o.jpg" alt="" width="">
             </div>
             <div class="column is-4">
               <button>OK</button>
               <button>cancle</button>
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
  name: 'HelloWorld',
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
