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
</template>

<script>
export default {
	name: 'MysqlDumpToFtp',
};
</script>

<style scoped>

</style>
