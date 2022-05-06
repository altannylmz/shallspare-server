<template>
  <div v-if="databaseName===null">
    <div class="form-group">
      <label for="mysql-database">Select Mysql Database</label>
      <select class="form-control" id="mysql-database">
        <option value="" disabled="" selected="">Select Mysql Database</option>
        <option>Wophoo-MYSQL</option>
        <option>ShallSpare-MYSQL</option>
      </select>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Select Target Disk Path</label>
      <input type="text" class="form-control" id="target-disk-path">
    </div>
  </div>
  <div v-else>
    <div class="form-group">
      <label for="mysql-tag">Mysql Tag</label>
      <input :value="mysqlTag" type="text" class="form-control" id="mysql-tag" readonly>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Mysql Tag</label>
      <input :value="targetDiskPath" type="text" class="form-control" id="target-disk-path" readonly>
    </div>
  </div>
</template>

<script>
export default {
	name: 'MysqlDumpToDisk',
	props: {
		mysqlTag: {
			default: null,
		},
		targetDiskPath: {
			default: null,
		},
	},
};
</script>

<style scoped>

</style>
