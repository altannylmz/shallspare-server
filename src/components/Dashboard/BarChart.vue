<template>
  <div class="text-center">
    <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
    />
    <p class="mt-1 mb-0">{{statisticData}}</p>
  </div>
</template>

<script>
import {Doughnut} from 'vue-chartjs';
import {Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
	name: 'BarChart',
	components: {Doughnut},
	props: {
		chartId: {
			type: String,
			default: 'doughnut-chart',
		},
		cssClasses: {
			default: '',
			type: String,
		},
		styles: {
			type: Object,
			default() {},
		},
		plugins: {
			type: Object,
			default() {},
		},
		data: {
			type: Object,
			default() {},
		},
		type: {
			type: String,
		},
	},
	data() {
		return {
			chartData: {
				labels: ['Ok', 'Warning', 'Error'],
				datasets: [
					{
						backgroundColor: ['#5E2B8F', '#CED7DA', '#9F8DCF'],
						data: [40, 20, 80],
					},
				],
			},
			chartOptions: {
				responsive: true,
			},
			statisticData: '',
		};
	},
	mounted() {
		if (this.type === 'task') {
			this.chartData.labels = ['Ok', 'Warning', 'Error'];
			this.chartData.datasets = [
				{
					backgroundColor: ['#5E2B8F', '#CED7DA', '#9F8DCF'],
					data: [this.data.ok, this.data.warning, this.data.err],
				},
			];
			this.statisticData = this.data.ok + '/' + this.data.warning + '/' + this.data.err;
		} else if (this.type === 'disk') {
			this.chartData.labels = ['Full', 'Free'];
			this.chartData.datasets = [
				{
					backgroundColor: ['#5E2B8F', '#CED7DA'],
					data: [this.data.full, this.data.free],
				},
			];
			this.statisticData = this.data.full + 'GB/' + this.data.free + 'GB';
		}
	},
};
</script>
