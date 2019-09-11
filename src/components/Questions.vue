<template>
  <div>
    <h1>{{ title }}</h1>
      <div class="questionButton" @click="submit('A')">{{ currentQuestion('A') }}</div>{{ $store.state.score_a }}<br>
      <div class="questionButton" @click="submit('B')">{{ currentQuestion('B') }}</div>{{ $store.state.score_b }}<br>
      <div class="questionButton" @click="submit('C')">{{ currentQuestion('C') }}</div>{{ $store.state.score_c }}
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
      // this.$emit('show', false)
      this.currentPage += 1
      // setTimeout(() => {
      //   this.$emit('show', true)
      // }, 1000)
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
