<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="newRemoteMachine(databases.mysql)" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Database
      </p>
      <div class="form-group">
        <label for="database-type">Type</label>
        <select v-model="databases.mysql.type" class="form-control" id="database-type" name="machineType" @change="changeRemoteMachineType($event)">
          <option disabled="" selected="">Type</option>
          <option value="0" id="ftp">Mysql</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tag">Tag</label>
        <input v-model="databases.mysql.tag" type="text" class="form-control" id="tag">
      </div>
      <div class="form-group">
        <label  for="hostname">Hostname</label>
        <input v-model="databases.mysql.hostname" type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="databases.mysql.password" type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="database-name">Database Name</label>
        <input v-model="databases.mysql.databaseName" type="text" class="form-control" id="database-name">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="databases.mysql.port" type="text" class="form-control" id="port">
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
			databases: {
				mysql: {
					type: '',
					tag: '',
					hostname: '',
					username: '',
					password: '',
					databaseName: '',
					port: '',
				},
			},
		};
	},
	methods: {
		newRemoteMachine(machine) {
			if (machine.username.length
          || machine.hostname.length
          || machine.password.length
          || machine.port.length) {
				console.log('test');
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
		changeRemoteMachineType() {

		},
		testConnection(machine) {
			if (machine.username.length
          || machine.hostname.length
          || machine.password.length
          || machine.port.length) {
				console.log('test');
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
	},
};
</script>

<style scoped>

</style>
