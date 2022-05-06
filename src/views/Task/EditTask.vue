<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form  class="bg-white shadow-sm p-4">
      <p class="text-start title">
        Edit Task
      </p>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="limit">Limit</label>
        <input type="number" class="form-control" id="limit">
      </div>
      <div class="form-group">
        <label for="schedule">Timing Type</label>
        <select class="form-control" id="schedule">
          <option value="minute">Minute</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'EditTask',
	data() {
		return {
			id: this.$route.params.id,
			task: {
				type: 0,
			},
		};
	},
};
</script>

<style scoped>

</style>
