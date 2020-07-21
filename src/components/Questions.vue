<template>
  <div>
    <h1>{{ title }}</h1>
     <div v-for="(answer, index) in answers" :key="index">
       <div class="questionButton" @click="submit(index)">{{ answer }}</div>
     </div>
  </div>
</template>

<script>
import { QUESTIONS } from '@/constants/questions'
import { SET } from '@/vuex/mutation-types'
const SCORE_NAME = ['a', 'b', 'c', 'd', 'e']
export default {
  data () {
    return {
      currentPage: 0
    }
  },
  created () {
    this.inithializeScore()
  },
  methods: {
    currentQuestion (bet) {
      return QUESTIONS[this.currentPage][bet][0]
    },
    submit (i) {
      if (this.currentPage === 7) this.$router.push({ name: 'Result' })
      const targetAnswer = QUESTIONS[this.currentPage].score[i]
      this.commitScore(targetAnswer)
      this.currentPage += 1
    },
    commitScore (targetAnswer) {
      // state名を回すようにしたい
      ['a', 'b', 'c', 'd', 'e'].forEach((v, i) => {
        console.log(this.$store.state.score[`score_${v}`])
        console.log(targetAnswer[i])
        this.$store.commit(SET, { path: ['score', `score_${v}`], value: this.$store.state.score[`score_${v}`] + targetAnswer[i] })
      })
    },
    inithializeScore () {
      SCORE_NAME.forEach(v => {
        this.$store.commit(SET, { path: ['score', `score_${v}`], value: 0 })
      })
    }
  },
  computed: {
    title () {
      return QUESTIONS[this.currentPage]['title']
    },
    answers () {
      return QUESTIONS[this.currentPage]['answers']
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
