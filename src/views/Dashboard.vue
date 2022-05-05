<template>
  <div class="dashboard content position-absolute start-0 end-0 px-4">
    <div class="statistic row">
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Data-Backup"></i>
          <p>Task</p>
          <p>15</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Data-Backup"></i>
          <p>Task</p>
          <p>15</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Data-Backup"></i>
          <p>Task</p>
          <p>15</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Data-Backup"></i>
          <p>Task</p>
          <p>15</p>
        </div>
      </div>
    </div>
    <div class="statistic row">
      <div class="col-sm-6">
        <div class="bar-card bg-white shadow shadow-sm">
          <BarChart type="task" :data="taskStatistic"></BarChart>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="bar-card bg-white shadow shadow-sm">
          <BarChart type="disk" :data="diskStatistic"></BarChart>
        </div>
      </div>
    </div>
    <div class="statistic row">
      <div class="col-sm-6">
        <div class="bar-card bg-white shadow shadow-sm">
          <BarChart type="task" :data="taskStatistic"></BarChart>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="bar-card bg-white shadow shadow-sm">
          <BarChart type="disk" :data="diskStatistic"></BarChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/Dashboard/BarChart';
export default {
	name: 'DashboardView',
	components: {BarChart},
	data() {
		return {
			taskStatistic: {ok: 16, err: 2, warning: 3},
			diskStatistic: {full: 500, free: 200},
		};
	},
};
</script>

<style scoped>

</style>
