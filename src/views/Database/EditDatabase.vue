<template>
  <div class="edit-remote-machine content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="updateDatabase(databases.mysql)" class="bg-white shadow-sm p-4">
      <p class="text-start title text-purple">
        Edit Database
      </p>
      <div class="form-group">
        <label for="type">Type</label>
        <input v-model="databases.mysql.type"
               readonly type="text" class="form-control" id="type">
      </div>
      <div class="form-group">
        <label for="tag">Tag</label>
        <input v-model="databases.mysql.tag"
               type="text" class="form-control" id="tag">
      </div>
      <div class="form-group">
        <label for="hostname">Hostname</label>
        <input v-model="databases.mysql.hostname"
               type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="databases.mysql.username"
               type="text" class="form-control" id="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="databases.mysql.password"
               type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="database_name">Database Name</label>
        <input v-model="databases.mysql.databaseName"
               type="text" class="form-control" id="database_name">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="databases.mysql.port"
               type="number" class="form-control" id="port">
      </div>
      <button type="submit" class="container-fluid text-center">Update</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'EditDatabase',
	data() {
		return {
			id: this.$route.params.id,
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
		updateDatabase(machine) {
			if (machine.tag.length
          || machine.hostname.length
          || machine.username.length
          || machine.password.length
          || machine.databaseName.length
          || machine.port.length) {
				console.log(this.id);
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
	},
};
</script>

<style scoped>

</style>
