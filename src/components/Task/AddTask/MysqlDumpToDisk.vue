<template>
  <div>
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
</template>

<script>
export default {
	name: 'MysqlDumpToDisk',
};
</script>

<style scoped>

</style>
