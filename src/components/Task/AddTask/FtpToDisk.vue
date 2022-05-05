<template>
  <div>
    <div class="form-group">
      <label for="selected-source-ftp">Select Source FTP</label>
      <select class="form-control" id="selected-source-ftp">
        <option value="" disabled="" selected="">Select Source FTP</option>
        <option>192.168.1.222</option>
        <option>142.23.53.111</option>
      </select>
    </div>
    <div class="form-group">
      <label for="source-ftp-path">Select Source FTP Path</label>
      <textarea disabled class="form-control" id="source-ftp-path" rows="3"></textarea>
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
	name: 'FtpToDisk',
};
</script>

<style scoped>

</style>
