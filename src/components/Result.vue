<template>
  <div class="hello">
    <div>Score A: {{ $store.state.score_a }}</div>
    <div>Score B: {{ $store.state.score_b }}</div>
    <div>Score C: {{ $store.state.score_c }}</div>
    <div>Score D: {{ $store.state.score_d }}</div>
    <div>Score E: {{ $store.state.score_e }}</div>
    <radar-score class="chart"></radar-score>
    <router-link :to="{ name: 'HelloWorld' }">Restart</router-link>
  </div>
</template>

<script>
import RadarScore from '@/components/RadarScore'
export default {
  components: { RadarScore },
  data () {
    return {
      cat_type: [ 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh' ]
    }
  },
  computed: {
    calc_cat_type () {
      if (this.score_a + this.score_b > 5) {
        return this.cat_type[0]
      } else if (this.score_a + this.score_c > 5) {
        return this.cat_type[1]
      } else {
        return this.cat_type[2]
      }
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
.chart {
  max-width: 500px;
  max-height: 500px;
  border: 0.3px solid #2c3e50;
  margin: 0 20px;
}
</style>
