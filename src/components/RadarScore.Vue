<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['cat', 'February', 'March', 'April', '魅力'],
        datasets: [
          {
            label: 'cat',
            data: [4, 2, 3, 4, 5],
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
    this.renderChart(this.data, this.options)
  }
}
</script>
