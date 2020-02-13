<template>
  <div>
    <h1>{{ title }}</h1>
      <div class="questionButton" @click="submit('A')">{{ currentQuestion('A') }}</div>{{ $store.state.score.score_a }}<br>
      <div class="questionButton" @click="submit('B')">{{ currentQuestion('B') }}</div>{{ $store.state.score.score_b }}<br>
      <div class="questionButton" @click="submit('C')">{{ currentQuestion('C') }}</div>{{ $store.state.score.score_c }}
  </div>
</template>

<script>
import { QUESTIONS } from '@/constants/questions'
import { SET } from '@/vuex/mutation-types'
export default {
  data () {
    return {
      currentPage: 0
    }
  },
  created () {
    this.$store.commit(SET, { path: ['score', 'score_a'], value: 0 })
    this.$store.commit(SET, { path: ['score', 'score_b'], value: 0 })
    this.$store.commit(SET, { path: ['score', 'score_c'], value: 0 })
    this.$store.commit(SET, { path: ['score', 'score_d'], value: 0 })
    this.$store.commit(SET, { path: ['score', 'score_e'], value: 0 })
  },
  methods: {
    currentQuestion (bet) {
      return QUESTIONS[this.currentPage][bet][0]
    },
    submit (bet) {
      this.currentPage += 1
      if (this.currentPage === 8) this.$router.push({ name: 'Result' })
      switch (bet) {
        case 'A':
          // this.commitScore(bet)
          this.$store.commit(SET, { path: ['score', 'score_a'], value: this.$store.state.score.score_a + 1 })
          return 'A'
        case 'B':
          // this.commitScore(bet)
          this.$store.commit(SET, { path: ['score', 'score_b'], value: this.$store.state.score.score_b + 1 })
          return 'B'
        case 'C':
          // this.commitScore(bet)
          this.$store.commit(SET, { path: ['score', 'score_c'], value: this.$store.state.score.score_c + 1 })
          return 'C'
      }
    },
    commitScore (bet) {
      this.$store.commit(SET, { path: ['score', 'score_a'], value: this.$store.state.score.score_c + QUESTIONS[this.currentPage][bet][1][0] })
      this.$store.commit(SET, { path: ['score', 'score_b'], value: this.$store.state.score_c + QUESTIONS[this.currentPage][bet][1][1] })
      this.$store.commit(SET, { path: ['score', 'score_c'], value: this.$store.state.score_c + QUESTIONS[this.currentPage][bet][1][2] })
      this.$store.commit(SET, { path: ['score', 'score_d'], value: this.$store.state.score_c + QUESTIONS[this.currentPage][bet][1][3] })
      this.$store.commit(SET, { path: ['score', 'score_e'], value: this.$store.state.score_c + QUESTIONS[this.currentPage][bet][1][4] })
    }
  },
  computed: {
    title () {
      return QUESTIONS[this.currentPage]['title']
    }
  }
}
</script>
<style scoped lang="scss">
.questionButton {
  margin: 10px 0;
  padding: 10px;
  background-color:  #9099a3;
  border-radius: 10px;
}
.questionButton:hover {
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 1;
  transform: scale(1.2);
}
</style>
