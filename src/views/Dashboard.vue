<template>
  <div class="dashboard-page content position-absolute start-0 end-0 px-4">
    <div class="statistic row">
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Data-Backup text-purple"></i>
          <p>Task</p>
          <p>{{ sum.task }}</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Network-Window text-purple"></i>
          <p>Client</p>
          <p>{{ sum.client }}</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Cloud-Computer text-purple"></i>
          <p>Remote Machine</p>
          <p>{{ sum.remoteMachines }}</p>
        </div>
      </div>
      <div class="col-sm-3 text-center ">
        <div class="card shadow shadow-sm">
          <i class="i-Big-Data text-purple"></i>
          <p>Database</p>
          <p>{{ sum.database }}</p>
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
        <div class="info-card bg-white shadow shadow-sm overflow-auto">
          <div class="sticky-top bg-white">
            <p class="mb-0 pt-2 text-purple title">Active Clients</p>
            <hr class="m-0 mb-1">
          </div>
          <div v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i" class="row m-1">
            <div class="col-sm-2">
              1
            </div>
            <div class="col-sm-6">
              ALTAN-PC
            </div>
            <div class="col-sm-4 text-center">
               <button class="refresh-btn">
                 <font-awesome-icon icon="arrows-rotate"/>
               </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="info-card bg-white shadow shadow-sm overflow-auto">
          <div class="sticky-top bg-white">
            <p class="mb-0 pt-2 text-purple title">Active Tasks</p>
            <hr class="m-0 mb-1">
          </div>
          <div v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i" class="row m-1 active-task">
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
			sum: {
				task: 5,
				client: 3,
				remoteMachines: 7,
				database: 4,
			},
		};
	},
};
</script>

<style scoped>

</style>
