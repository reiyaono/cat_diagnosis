<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['自由度', '野生度', '好奇心', '賢さ', '優しさ'],
        datasets: [
          {
            label: 'cat',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderWidth: 2,
            lineTension: 0.1,
            borderDashOffset: 0.0
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 10,
            min: 0
          }
        }
      }
    }
  },
  mounted () {
    this.data.datasets[0].data = [this.score.score_a, this.score.score_b, this.score.score_c, this.score.score_d, this.score.score_e]
    this.renderChart(this.data, this.options)
  },
  computed: {
    score () {
      return this.$store.state.score
    }
  }
}
</script>
