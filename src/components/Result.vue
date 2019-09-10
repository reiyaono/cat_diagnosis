<template>
  <div class="hello">
    <h1>Score A: {{ $store.state.score_a }}</h1>
    <h1>Score B: {{ $store.state.score_b }}</h1>
    <h1>Score C: {{ $store.state.score_c }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
