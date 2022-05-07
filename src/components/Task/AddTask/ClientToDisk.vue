<template>
  <div v-if="clientName === null">
    <div class="form-group">
      <label for="selected-client">Select Source Client</label>
      <select class="form-control" id="selected-client">
        <option value="" disabled="" selected="">Select Source Client</option>
        <option v-for="(client,index) in clients" :value="client.id" :key="index">{{client.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Select Source Path</label>
      <select style="height: 70px;" multiple="" class="form-control" id="exampleFormControlTextarea1">
        <option disabled v-for="(path,index) in paths" :key="index">{{path}}</option>
      </select>
    </div>
    <div class="container-fluid p-0">
        <button @click="addPath" class="min-btn m-1">Add</button>
        <button @click="deletePath" class="min-btn m-1">Remove</button>
    </div>
    <div class="form-group">
      <label for="target-disk-path">Select Target Disk Path</label>
      <input :value="targetPath" @click="addTargetPath" readonly type="text" class="form-control" id="target-disk-path">
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
			paths: [],
			targetPath: '',
		};
	},
	mounted() {
		this.$db.all('SELECT * FROM Client', (err, clients) => {
			if (!err) {
				this.clients = clients;
			}
		});
	},
	methods: {
		addPath() {
			this.paths = this.$ipcRenderer.sendSync('showOpenDialog', true);
		},
		deletePath() {
			this.paths.splice(this.paths.length - 1, 1);
		},
		addTargetPath() {
			this.targetPath = this.$ipcRenderer.sendSync('showOpenDialog', false);
		},
	},
};
</script>

<style scoped>

</style>
