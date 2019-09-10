<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Your cat num is {{ catNum }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <router-link to="/result">Go to result</router-link>
      </li>
      <br>
      <questions></questions>
    </ul>
  </div>
</template>

<script>
import Questions from '@/components/questions'
export default {
  components: { Questions },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Cat diagnosis',
      catNum: 0,
      currentPage: 0,
      pointA: 0,
      pointB: 0,
      pointC: 0
    }
  },
  created () {
  },
  methods: {
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
