<template>
  <div v-if="targetFtpName">
    <div class="form-group">
      <label for="mysql-database">Select Mysql Database</label>
      <select class="form-control" id="mysql-database">
        <option value="" disabled="" selected="">Select Mysql Database</option>
        <option>Wophoo-MYSQL</option>
        <option>ShallSpare-MYSQL</option>
      </select>
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
      <label for="mysql-tag">Mysql Tag</label>
      <input :value="mysqlTag" type="text" class="form-control" id="mysql-tag" readonly>
    </div>
    <div class="form-group">
      <label for="target-ftp-name">Target FTP Name</label>
      <input :value="targetFtpName" type="text" class="form-control" id="target-ftp-name" readonly>
    </div>
    <div class="form-group">
      <label for="target-ftp-path">Target FTP Path</label>
      <input :value="targetFtpPath" type="text" class="form-control" id="target-ftp-path" readonly>
    </div>
  </div>
</template>

<script>
export default {
	name: 'MysqlDumpToFtp',
	props: {
		mysqlTag: {
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
