<template>
  <div class="tasks-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column">
      <div class="row justify-content-between">
        <div class="col">
          Tasks
        </div>
        <div class="col text-end">
          <router-link class="add-btn" to="/add-task" tag="button">Add Task</router-link>
        </div>
      </div>
      <div class="overflow-auto">
        <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="i" class="task row text-center shadow-sm">
          <div class="col-sm-1 my-auto">1</div>
          <div class="col-sm-4 my-auto text-start">CTF_FILE</div>
          <div class="col-sm-4 my-auto text-start">CLIENT TO DISK</div>
          <div class="col-sm-3 my-auto">
            <a><font-awesome-icon class="m-1" icon="arrow-down" /></a>
            <a><font-awesome-icon class="m-1" icon="pen" /></a>
            <a><font-awesome-icon class="m-1" icon="play" /></a>
            <a><font-awesome-icon class="m-1" icon="circle-minus" /></a>
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
};
</script>

<style scoped>

</style>
