<template>
  <div class="logs-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column position-relative">
      <div class="row justify-content-between">
        <div class="col">
          <p class="title text-purple">Logs</p>
        </div>
        <div class="col text-end">
          <font-awesome-icon class="add-icon" icon="stream"/>
          <router-link class="add-btn" to="/live-stream" tag="button">Live Stream</router-link>
        </div>
      </div>
      <hr>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th class="text-center" scope="col">Task</th>
          <th class="text-center" scope="col">Type</th>
          <th class="text-center" scope="col">Start</th>
          <th class="text-center" scope="col">Stop</th>
          <th class="text-center" scope="col">Path</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="i in logs" :key="i" class="shadow-sm">
        <td>BORD</td>
        <td class="task-type">Client To Disk</td>
        <td class="time">2022/04/22 23:26:47</td>
        <td class="time">2022/04/22 23:26:47</td>
        <td data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path">
          C:/Users/Altan/Desktop/BORD 26 4.22.2022 23.26.47</td>
      </tr>
      </tbody>
    </table>
    <div class="container-fluid text-center">
      <button @click="beforePage" class="pagination-btn">
        <font-awesome-icon icon="angle-left"/>
      </button>
      <button @click="showPage" class="page-number"
              v-for="i in Math.ceil(logs.length/5)" :key="i">{{i}}
      </button>
      <button @click="afterPage" class="pagination-btn">
        <font-awesome-icon icon="angle-right"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'LogsView',
	data() {
		return {
			logs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			pagination: [],
		};
	},
	mounted() {

	},
	methods: {
		afterPage() {

		},
		beforePage() {

		},
		showPage() {

		},
	},
};
</script>

<style scoped>

</style>
