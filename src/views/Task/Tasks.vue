<template>
  <div class="tasks-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column position-relative">
      <div class="row justify-content-between">
        <div class="col">
          <p class="title">Tasks</p>
        </div>
        <div class="col add text-end">
          <font-awesome-icon class="add-icon" icon="plus"/>
          <router-link class="add-btn" to="/new-task" tag="button">New Task</router-link>
        </div>
      </div>
      <hr>
      <div v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i"
           class="data-row row text-center shadow-sm text-black">
        <div class="col-sm-1 my-auto">1</div>
        <div class="col-sm-4 my-auto text-start">CTF_FILE</div>
        <div class="col-sm-4 my-auto text-start">CLIENT TO DISK</div>
        <div class="col-sm-3 my-auto text-end">
          <div class="dropdown">
            <button class="btn dropdown" data-bs-toggle="dropdown"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a><font-awesome-icon class="m-1" icon="ellipsis" /></a>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link class="dropdown-item" :to="'/edit-task/'+i" tag="a">
                <font-awesome-icon class="my-auto mx-2" icon="pen"/>
                <p class="d-inline text-end">Edit</p>
              </router-link>
              <a @click="pauseOrStartTask(i)" class="dropdown-item">
                <font-awesome-icon class="my-auto mx-2" icon="play"/>
                <p class="d-inline text-end">Play</p>
              </a>
              <a @click="deleteTask(i)" class="dropdown-item">
                <font-awesome-icon class="my-auto mx-2" icon="trash"/>
                <p class="d-inline text-end">Delete</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a class="m-1 active-page">1</a>
        <a class="m-1">2</a>
        <a class="m-1">3</a>
        <a class="m-1">4</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'TasksView',
	methods: {
		deleteTask(taskId) {
			console.log(taskId);
		},
		pauseOrStartTask(taskId) {
			console.log(taskId);
		},
	},
};
</script>

<style scoped>

</style>
