<template>
  <div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Select Source Client</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option value="" disabled="" selected="">Select Source Client</option>
        <option>Altan-PC</option>
        <option>Hamza-PC</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Select Source Path</label>
      <textarea disabled class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
	name: 'ClientToDisk',
};
</script>

<style scoped>

</style>
