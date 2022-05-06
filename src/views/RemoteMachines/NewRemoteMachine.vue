<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="newRemoteMachine(remoteMachine.ftp)" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Remote Machine
      </p>
      <div class="form-group">
        <label for="machine-type">Type</label>
        <select v-model="remoteMachine.ftp.type" class="form-control" id="machine-type" name="machineType" @change="changeRemoteMachineType($event)">
          <option value="null" disabled="" selected="">Type</option>
          <option value="0" id="ftp">FTP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="hostname">Hostname</label>
        <input v-model="remoteMachine.ftp.type" type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label  for="username">Username</label>
        <input v-model="remoteMachine.ftp.username" type="text" class="form-control" id="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="remoteMachine.ftp.password" type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="remoteMachine.ftp.port" type="text" class="form-control" id="port">
      </div>
      <button @click.prevent="testConnection(remoteMachine.ftp)"
              class="min-btn mt-2">Test Connection</button>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'NewRemoteMachine',
	data() {
		return {
			remoteMachine: {
				ftp: {
					type: '',
					username: '',
					hostname: '',
					password: '',
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
