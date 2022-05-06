<template>
  <div v-if="sourcePaths===null">
    <div class="form-group">
      <label for="source-server-paths">Select Source Paths</label>
      <textarea disabled class="form-control" id="source-server-paths" rows="3"></textarea>
    </div>
    <div class="container-fluid p-0">
      <button class="min-btn m-1">Add</button>
      <button class="min-btn m-1">Remove</button>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Select Target Disk Path</label>
      <input type="text" class="form-control" id="target-disk-path">
    </div>
  </div>
  <div v-else>
    <div class="form-group">
      <label for="source-server-paths">Source Paths</label>
      <textarea :value="sourcePaths" class="form-control" id="source-server-paths" rows="3" disabled></textarea>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Target Path</label>
      <input :value="targetPath" type="text" class="form-control" id="target-disk-path" readonly>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ServerToDisk',
	props: {
		sourcePaths: {
			default: null,
		},
		targetPath: {
			default: null,
		},
	},
};
</script>

<style scoped>

</style>
