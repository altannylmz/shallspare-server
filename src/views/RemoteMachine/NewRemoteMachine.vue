<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="newRemoteMachine(remoteMachine.ftp)" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Remote Machine
      </p>
      <div class="form-group">
        <label for="machine-type">Type</label>
        <select v-model="remoteMachine.ftp.type" @change="remoteMachine.ftp.type = $event.target.value"
                class="form-control" id="machine-type" name="machineType">
          <option value="-1" disabled="" selected="">Type</option>
          <option value="0" id="ftp">FTP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="hostname">Hostname</label>
        <input v-model="remoteMachine.ftp.hostname" type="text" class="form-control" id="hostname">
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
        <input v-model="remoteMachine.ftp.port" type="number" class="form-control" id="port" placeholder="21">
      </div>
      <button @click.prevent="testConnection(remoteMachine.ftp)"
              class="min-btn mt-2">Test Connection</button>
      <button type="submit" class="container-fluid text-center">Add</button>
    </form>
  </div>
</template>

<script>
import Helper from '@/plugins/Transfer/helper';
export default {
	name: 'NewRemoteMachine',
	data() {
		return {
			remoteMachine: {
				ftp: {
					type: '-1',
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
			if (machine.type !== '-1'
          && machine.username.length
          && machine.hostname.length
          && machine.password.length
          && machine.port) {
				this.$db.run('INSERT INTO Remote(type,host,user_name,password,port) values (?,?,?,?,?)', [
					machine.type,
					machine.username,
					machine.hostname,
					machine.password,
					machine.port,
				], err => {
					if (!err) {
						this.$notify.success('Successful.');
						this.remoteMachine.ftp = {
							type: '-1',
							username: '',
							hostname: '',
							password: '',
							port: '',
						};
					}
				});
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
		async testConnection(machine) {
			if (machine.type !== '-1'
          && machine.username.length
          && machine.hostname.length
          && machine.password.length
          && machine.port) {
				if (await Helper.ftpTest(machine.hostname, machine.username, machine.password, machine.port)) {
					this.$notify.success('Connection successful.');
				} else {
					this.$notify.failure('Connection failed.');
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
