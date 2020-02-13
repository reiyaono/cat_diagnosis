<template>
  <div class="result">
    <div>Score A: {{ score.score_a }}</div>
    <div>Score B: {{ score.score_b }}</div>
    <div>Score C: {{ score.score_c }}</div>
    <div>Score D: {{ score.score_d }}</div>
    <div>Score E: {{ score.score_e }}</div>
    <div class="chartContainer">
      <radar-score class="chart"></radar-score>
    </div>
    <router-link :to="{ name: 'Top' }">Restart</router-link>
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
    score () {
      return this.$store.state.score
    },
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
.result {
  padding-top: 20px;
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
.chartContainer {
  width: 300px;
  height: 300px;
  margin: 20px auto;
  padding: 10px;
  border: 0.3px solid #2c3e50;
}

</style>
