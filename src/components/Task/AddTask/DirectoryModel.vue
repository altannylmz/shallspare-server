<template>
  <div v-if="$parent.directoryModelShow" class="directory-model text-start p-2 shadow shadow-lg">
    <input class="container-fluid" type="text" value="C:/Users/Altan/Desktop">
    <div v-if="path!==''" class="top-item" @dblclick="returnTopDir(path)">
      <font-awesome-icon class="icon d-inline-flex" icon="angle-left"/>
      <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">
        {{ path }}</p>
    </div>
    <div v-if="$parent.activePaths!==null" class="directory-list overflow-auto">
      <div v-for="(path,index) in $parent.activePaths.folderList" :key="index" class="flex-row item" @dblclick="keepGoing(path.file)">
        <font-awesome-icon v-if="path.type==='disk'" class="icon d-inline-flex" icon="floppy-disk"/>
        <font-awesome-icon v-if="path.type==='dir'" class="icon d-inline-flex" icon="folder"/>
        <font-awesome-icon v-if="path.type==='file'" class="icon d-inline-flex" icon="file"/>
        <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">
            {{ path.file }}</p>
      </div>
    </div>
    <p v-if="$parent.activePaths===null" class="text-center">
      Boş dir
    </p>
    <div class="text-end">
      <button @click="cancel">CANCEL</button>
      <button>OK</button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'DirectoryModel',
	data() {
		return {
			path: '',
			selectedPath: null,
		};
	},
	methods: {
		keepGoing(path) {
			this.path += (path + '/');
			this.$io.to(this.$parent.clientToDisk.client).emit('fetch_directory_listing', {fetch_directory: this.path});
			this.$parent.activePaths = null;
		},
		returnTopDir(path) {
			if (this.$parent.activePaths.platform === 'win32') {
				const isTop = path.split('/').length === 2;
				console.log(isTop + ' ' + path.split('/').length);
				if (isTop) {
					this.$parent.activePaths = null;
					this.path = '';
					this.$io.to(this.$parent.clientToDisk.client)
						.emit('fetch_directory_listing', {fetch_directory: 'DISK'});
				} else {
					this.$parent.activePaths = null;
					this.path = this.findTopDir();
					this.$io.to(this.$parent.clientToDisk.client).emit('fetch_directory_listing', {fetch_directory: this.path});
				}
			} else {
				this.$io.to(this.$parent.clientToDisk.client).emit('fetch_directory_listing', {fetch_directory: path});
			}
		},
		findTopDir() {
			let topDir = '';
			const parsed = this.path.split('/');
			for (let i = 0; i < parsed.length - 2; ++i) {
				topDir += `${parsed[i]}/`;
			}

			return topDir;
		},
		cancel() {
			this.$parent.directoryModelShow = false;
			this.$parent.activePaths = null;
			this.path = '';
		},
	},
};
</script>

<style scoped>

</style>
