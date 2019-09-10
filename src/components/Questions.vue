<template>
  <div>
    <h1>{{ title }}</h1>
    <button class="questionButton" @click="submit('A')">{{ currentQuestion('A') }}</button>{{ $store.state.score_a }}<br>
    <button class="questionButton" @click="submit('B')">{{ currentQuestion('B') }}</button>{{ $store.state.score_b }}<br>
    <button class="questionButton" @click="submit('C')">{{ currentQuestion('C') }}</button>{{ $store.state.score_c }}
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
    this.$store.commit(SET, { path: ['score_a'], value: 0 })
    this.$store.commit(SET, { path: ['score_b'], value: 0 })
    this.$store.commit(SET, { path: ['score_c'], value: 0 })
  },
  methods: {
    currentQuestion (bet) {
      return QUESTIONS[this.currentPage][bet][0]
    },
    submit (bet) {
      this.currentPage += 1
      switch (bet) {
        case 'A':
          if (this.currentPage === 8) this.$router.push({ name: 'Result' })
          this.$store.commit(SET, { path: ['score_a'], value: this.$store.state.score_a + 1 })
          return 'A'
        case 'B':
          if (this.currentPage === 8) this.$router.push({ name: 'Result' })
          this.$store.commit(SET, { path: ['score_b'], value: this.$store.state.score_b + 1 })
          return 'B'
        case 'C':
          if (this.currentPage === 8) this.$router.push({ name: 'Result' })
          this.$store.commit(SET, { path: ['score_c'], value: this.$store.state.score_c + 1 })
          return 'C'
      }
    }
  },
  computed: {
    title () {
      return QUESTIONS[this.currentPage]['title']
    }
  }
}
</script>
<style lang="scss">
.questionButton {
  margin: auto;
}
</style>
