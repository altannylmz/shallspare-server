<template>
  <div v-if="clientName === null">
    <div class="form-group">
      <label for="selected-client">Select Source Client</label>
      <select @change="$parent.clientToDisk.client = $event.target.value" class="form-control" id="selected-client">
        <option value="" disabled="" selected="">Select Source Client</option>
        <option v-for="(client,index) in this.clients" :value="client.socket_id" :key="index">{{client.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Select Source Path</label>
      <select  style="height: 70px;" multiple="" class="form-control" id="exampleFormControlTextarea1">
        <option disabled v-for="(path,index) in this.$parent.clientToDisk.paths" :key="index">{{path}}</option>
      </select>
    </div>
    <div class="container-fluid p-0">
        <button @click.prevent="addPath" class="min-btn m-1">Add</button>
        <button @click.prevent="deletePath" class="min-btn m-1">Remove</button>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Select Target Disk Path</label>
      <input :value="$parent.clientToDisk.targetPath" @click.prevent="addTargetPath" readonly type="text" class="form-control" id="target-disk-path">
    </div>
  </div>
  <div v-else>
    <div class="form-group">
      <label for="client-name">Client Name</label>
      <input :value="clientName" type="text" class="form-control" id="client-name" readonly >
    </div>
    <div class="form-group">
      <label for="source-paths">Source Paths</label>
      <textarea :value="sourcePaths" disabled class="form-control" id="source-paths" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Target Disk Path</label>
      <input :value="targetDiskPath" type="text" class="form-control" id="target-disk-path" readonly >
    </div>
  </div>
</template>

<script>
export default {
	name: 'ClientToDisk',
	props: {
		clientName: {
			default: null,
		},
		sourcePaths: {
			default: null,
		},
		targetDiskPath: {
			default: null,
		},
	},
	data() {
		return {
			clients: [],
		};
	},
	mounted() {
		this.getClients();

		this.$emitter.on('connect', () => this.getClients());
		this.$emitter.on('directory_list', content => {
			console.log(content);
			this.$parent.activePaths = content;
		});
	},
	methods: {
		addPath() {
			if (this.$parent.type !== '') {
				if (this.$parent.clientToDisk.client !== '') {
					if (this.$io.sockets.sockets.get(this.$parent.clientToDisk.client) !== undefined) {
						this.$parent.directoryModelShow = true;
						this.$io.to(this.$parent.clientToDisk.client)
							.emit('fetch_directory_listing', {fetch_directory: 'DISK'});
					} else {
						this.$notify.warning('The selected client is down.');
					}
				} else {
					this.$notify.warning('Please, select client');
				}
			} else {
				this.$notify.warning('Please, select task type');
			}
		},
		deletePath() {
			this.$parent.clientToDisk.paths.splice(this.$parent.clientToDisk.paths.length - 1, 1);
		},
		addTargetPath() {
			this.$parent.clientToDisk.targetPath = this.$ipcRenderer.sendSync('showOpenDialog', false);
		},
		getClients() {
			this.$db.all('SELECT * FROM Client', (err, clients) => {
				if (!err) {
					this.clients = clients;
				}
			});
		},
	},
};
</script>

<style scoped>

</style>
