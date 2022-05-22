<template>
  <div v-if="clientName===null">
    <div class="form-group">
      <label for="selected-client">Select Source Client</label>
      <select @change="changeClient($event.target.value)" class="form-control" id="selected-client">
        <option value="" disabled="" selected="">Select Source Client</option>
        <option v-for="(client,index) in clients" :value="index" :key="index">{{client.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Select Source Path</label>
      <select  style="height: 70px;" multiple="" class="form-control overflow-auto" id="exampleFormControlTextarea1">
        <option disabled v-for="(path,index) in $parent.client.sourcePaths" :key="index">{{path}}</option>
      </select>
    </div>
    <div class="container-fluid p-0">
      <button @click.prevent="addPath" class="min-btn m-1">Add</button>
      <button @click.prevent="deletePath" class="min-btn m-1">Remove</button>
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
      <label for="target-ftp-name">Target FTP Name</label>
      <input :value="targetFtpName" type="text" class="form-control" id="target-ftp-name" readonly >
    </div>
    <div class="form-group">
      <label for="target-ftp-path">Target FTP Path</label>
      <input :value="targetFtpPath" type="text" class="form-control" id="target-ftp-path" readonly >
    </div>
  </div>
</template>

<script>
export default {
	name: 'ClientToFtp',
	props: {
		clientName: {
			default: null,
		},
		sourcePaths: {
			default: null,
		},
		targetFtpName: {
			default: null,
		},
		targetFtpPath: {
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
		changeClient(value) {
			this.$parent.client.socketId = this.clients[value].socket_id;
			this.$parent.client.clientId = this.clients[value].id;
		},
		addPath() {
			this.$parent.whatWillDirModel = 'client';
			if (this.$parent.type !== '') {
				if (this.$parent.client.socketId !== '') {
					if (this.$io.sockets.sockets.get(this.$parent.client.socketId) !== undefined) {
						this.$parent.directoryModelShow = true;
						this.$io.to(this.$parent.client.socketId)
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
			this.$parent.client.sourcePaths.splice(this.$parent.client.sourcePaths.length - 1, 1);
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
