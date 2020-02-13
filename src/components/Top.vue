<template>
  <div class="content">
    <h1>{{ msg }}</h1>
    <h4>
      This diagnosis can judge your cat type.<br>
      Also you can check best partner cat with you.<br>
      Let's check and share which type is yours!
    </h4>
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
  name: 'Top',
  data () {
    return {
      msg: 'Cat diagnosis',
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
.content {
  padding: 5px 20px;
  min-height: 100%;
}
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
