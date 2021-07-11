<template>
  <div class="dashboard-editor-container"></div>
</template>

<script lang="ts">
import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DashboardAdmin',
  components: {}
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  flex: 1;
  background-color: rgb(240, 242, 245);
}
</style>
