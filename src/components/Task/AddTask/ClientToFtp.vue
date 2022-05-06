<template>
  <div v-if="clientName===null">
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
      <label for="client-name">Client Name</label>
      <input :value="clientName" type="text" class="form-control" id="client-name" readonly >
    </div>
    <div class="form-group">
      <label for="source-paths">Source Paths</label>
      <textarea :value="sourcePaths" disabled class="form-control" id="source-paths" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="target-ftp-name">Target FTP Name</label>
      <input :value="targetFtpName" type="text" class="form-control" id="target-ftp-name" readonly >
    </div>
    <div class="form-group">
      <label for="target-ftp-path">Target FTP Path</label>
      <input :value="targetFtpPath" type="text" class="form-control" id="target-ftp-path" readonly >
    </div>
  </div>
</template>

<script>
export default {
	name: 'ClientToFtp',
	props: {
		clientName: {
			default: null,
		},
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
