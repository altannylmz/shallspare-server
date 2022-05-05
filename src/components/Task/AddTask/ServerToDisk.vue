<template>
  <div>
    <div class="form-group">
      <label for="source-server-paths">Select Source Path</label>
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
</template>

<script>
export default {
	name: 'ServerToDisk',
};
</script>

<style scoped>

</style>
