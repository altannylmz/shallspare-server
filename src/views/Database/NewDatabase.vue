<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="newDatabase" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Database
      </p>
      <div class="form-group">
        <label for="database-type">Type</label>
        <select v-model="type" class="form-control" id="database-type"
                name="machineType" @change="type = $event.target.value">
          <option value="-1" disabled="" selected="">Type</option>
          <option value="0" id="ftp">Mysql</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tag">Tag</label>
        <input v-model="mysql.tag" type="text" class="form-control" id="tag">
      </div>
      <div class="form-group">
        <label  for="hostname">Hostname</label>
        <input v-model="mysql.hostname" type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="mysql.password" type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="database-name">Database Name</label>
        <input v-model="mysql.databaseName" type="text" class="form-control" id="database-name">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="mysql.port" type="number" class="form-control" id="port">
      </div>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'NewRemoteMachine',
	data() {
		return {
			type: '-1',
			mysql: {
				tag: '',
				hostname: '',
				username: '',
				password: '',
				databaseName: '',
				port: '',
			},
		};
	},
	methods: {
		newDatabase() {
			if (this.type !== '-1') {
				switch (Number(this.type)) {
					case 0:
						if (this.mysql.tag.length
                || this.mysql.hostname.length
                || this.mysql.username.length
                || this.mysql.password.length
                || this.mysql.databaseName.length
                || this.mysql.port !== '') {
							this.$db.run('INSERT INTO Mysql(type,tag,host,user_name,password,database_name,port) values (?,?,?,?,?,?,?)', [
								this.type,
								this.mysql.tag,
								this.mysql.hostname,
								this.mysql.username,
								this.mysql.password,
								this.mysql.databaseName,
								this.mysql.port,
							], err => {
								if (!err) {
									this.$notify.success('Successful.');
									this.mysql = {
										tag: '',
										hostname: '',
										username: '',
										password: '',
										databaseName: '',
										port: '',
									};
									this.type = '-1';
								}
							});
						} else {
							this.$notify.warning('Fill Empty Area');
						}

						break;
					default:
						break;
				}
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
	},
};
</script>

<style scoped>

</style>
