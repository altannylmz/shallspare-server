<template>
  <div v-if="sourcePaths===null">
    <div class="form-group">
      <label for="source-server-paths">Select Source Path</label>
      <textarea disabled class="form-control" id="source-server-paths" rows="3"></textarea>
    </div>
    <div class="container-fluid p-0">
      <button class="min-btn m-1">Add</button>
      <button class="min-btn m-1">Remove</button>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Select Target FTP</label>
      <select class="form-control" id="exampleFormControlSelect2">
        <option value="" disabled="" selected="">Select Target FTP</option>
        <option>Wophoo-FTP</option>
        <option>ShallSpare-FTP</option>
      </select>
    </div>
    <div class="form-group">
      <label for="target-ftp-path">Select Target FTP Path</label>
      <input type="text" class="form-control" id="target-ftp-path">
    </div>
  </div>
  <div v-else>
    <div class="form-group">
      <label for="source-server-paths">Select Source Path</label>
      <textarea :value="sourcePaths" class="form-control" id="source-server-paths" rows="3" disabled></textarea>
    </div>
    <div class="form-group">
      <label for="target-ftp-name">Target FTP Name</label>
      <input :value="targetFtpName" type="text" class="form-control" id="target-ftp-name" readonly>
    </div>
    <div class="form-group">
      <label for="target-ftp-name">Target FTP Path</label>
      <input :value="targetFtpPath" type="text" class="form-control" id="target-ftp-path" readonly>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ServerToFtp',
	props: {
		sourcePaths: {
			default: null,
		},
		targetFtpName: {
			default: null,
		},
		targetFtpPath: {
			default: null,
		},
	},
};
</script>

<style scoped>

</style>
