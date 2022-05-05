<template>
  <div class="dashboard-page content position-absolute start-0 end-0 px-4">
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
          <p class="mb-0">Active Clients</p>
          <hr class="m-0 mb-1">
          <div class="row m-1">
            <div class="col-sm-2">
              1
            </div>
            <div class="col-sm-6">
              ALTAN-PC
            </div>
            <div class="col-sm-4 text-center">
               <button class="refresh-btn shadow shadow-sm">Refresh</button>
            </div>
          </div>
          <div class="row m-1">
            <div class="col-sm-2">
              2
            </div>
            <div class="col-sm-6">
              ALTAN-PC
            </div>
            <div class="col-sm-4 text-center">
              <button class="refresh-btn shadow shadow-sm">Refresh</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="bar-card bg-white shadow shadow-sm">
          <p class="mb-0">Active Tasks</p>
          <hr class="m-0 mb-1">
          <div class="row m-1 active-task">
            <div class="col-sm-2">
              1
            </div>
            <div class="col-sm-4 task-name">
              Mysql Backup
            </div>
            <div class="col-sm-6 my-auto">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </div>
          </div>
          <div class="row m-1 active-task">
            <div class="col-sm-2">
              2
            </div>
            <div class="col-sm-4 task-name">
              ShallSpare FTP
            </div>
            <div class="col-sm-6 my-auto">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </div>
          </div>
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
