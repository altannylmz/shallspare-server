<template>
  <div class="edit-remote-machine content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="updateRemoteMachine(remoteMachine.ftp)" class="bg-white shadow-sm p-4">
      <p class="text-start title text-purple">
        Edit Remote Machine
      </p>
      <div class="form-group">
        <label for="type">Type</label>
        <input v-model="remoteMachine.ftp.type"
               readonly type="text" class="form-control" id="type">
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="remoteMachine.ftp.name"
               type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="hostname">Hostname</label>
        <input v-model="remoteMachine.ftp.hostname"
               type="text" class="form-control" id="hostname">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="remoteMachine.ftp.password"
               type="text" class="form-control" id="password">
      </div>
      <div class="form-group">
        <label for="port">Port</label>
        <input v-model="remoteMachine.ftp.port"
               type="number" class="form-control" id="port">
      </div>
      <button @click.prevent="testConnection(remoteMachine.ftp)"
              class="min-btn mt-2">Test Connection</button>
      <button type="submit" class="container-fluid text-center">Update</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'EditRemoteMachine',
	data() {
		return {
			id: this.$route.params.id,
			remoteMachine: {
				ftp: {
					type: '',
					name: '',
					hostname: '',
					password: '',
					port: '',
				},
			},
		};
	},
	methods: {
		updateRemoteMachine(machine) {
			if (machine.name.length
      || machine.hostname.length
      || machine.password.length
      || machine.port.length) {
				console.log(this.id);
			} else {
				this.$notify.warning('Fill Empty Area');
			}
		},
		testConnection(machine) {
			if (machine.name.length
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
