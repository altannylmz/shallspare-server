<template>
  <div class="add-task-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="newRemoteMachine" class="bg-white shadow-sm p-4">
      <p class="text-start title">
        New Remote Machine
      </p>
      <div class="form-group">
        <label for="machine-type">Type</label>
        <select v-model="type" @change="type = $event.target.value"
                class="form-control" id="machine-type" name="machineType">
          <option value="-1" disabled="" selected="">Type</option>
          <option value="0" id="ftp">FTP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="hostname">Hostname</label>
        <input v-model="ftp.hostname" type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label  for="username">Username</label>
        <input v-model="ftp.username" type="text" class="form-control" id="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="ftp.password" type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="ftp.port" type="number" class="form-control" id="port" placeholder="21">
      </div>
      <button @click.prevent="testConnection"
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
			type: '-1',
			ftp: {
				username: '',
				hostname: '',
				password: '',
				port: '',
			},
		};
	},
	methods: {
		newRemoteMachine() {
			if (this.type !== '-1') {
				if (this.ftp.username.length
            && this.ftp.hostname.length
            && this.ftp.password.length
            && this.ftp.port) {
					switch (Number(this.type)) {
						case 0:
							this.$db.run('INSERT INTO Remote(type,host,user_name,password,port) values (?,?,?,?,?)', [
								this.ftp.type,
								this.ftp.username,
								this.ftp.hostname,
								this.ftp.password,
								this.ftp.port,
							], err => {
								if (!err) {
									this.$notify.success('Successful.');
									this.ftp = {
										type: '-1',
										username: '',
										hostname: '',
										password: '',
										port: '',
									};
								}
							});
							break;
						default:
							break;
					}
				} else {
					this.$notify.warning('Fill Empty Area');
				}
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
		async testConnection() {
			if (this.type !== '-1') {
				if (this.ftp.username.length
            && this.ftp.hostname.length
            && this.ftp.password.length
            && this.ftp.port) {
					if (await Helper.ftpTest(this.ftp.hostname, this.ftp.username, this.ftp.password, this.ftp.port)) {
						this.$notify.success('Connection successful.');
					} else {
						this.$notify.failure('Connection failed.');
					}
				} else {
					this.$notify.warning('Fill Empty Area');
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
