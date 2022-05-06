<template>
  <div v-if="ftpName===null">
    <div class="form-group">
      <label for="selected-source-ftp">Select Source FTP</label>
      <select class="form-control" id="selected-source-ftp">
        <option value="" disabled="" selected="">Select Source FTP</option>
        <option>192.168.1.222</option>
        <option>142.23.53.111</option>
      </select>
    </div>
    <div class="form-group">
      <label for="source-ftp-path">Select Source FTP Paths</label>
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
  <div v-else>
    <div class="form-group">
      <label for="soruce-ftp-name">Source FTP Name</label>
      <input :value="ftpName" type="text" class="form-control" id="soruce-ftp-name" readonly>
    </div>
    <div class="form-group">
      <label for="source-ftp-paths">Select Source FTP Paths</label>
      <textarea :value="ftpPaths" class="form-control" id="source-ftp-paths" rows="3" disabled></textarea>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Target Disk Path</label>
      <input :value="targetPath" type="text" class="form-control" id="target-disk-path" readonly>
    </div>
  </div>
</template>

<script>
export default {
	name: 'FtpToDisk',
	props: {
		ftpName: {
			default: null,
		},
		ftpPaths: {
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
