<template>
  <div v-if="$parent.directoryModelShow" class="directory-model text-start p-2 shadow shadow-lg">
    <input class="container-fluid" type="text" value="C:/Users/Altan/Desktop">
    <div v-if="path!==''" class="top-item" @dblclick="returnTopDir(path)">
      <font-awesome-icon class="icon d-inline-flex" icon="angle-left"/>
      <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">
        {{ path }}</p>
    </div>
    <div class="directory-list overflow-auto">
      <Spinner v-if="$parent.activePaths===null"/>
      <div v-else>
        <div v-if="$parent.whatWillDirModel==='client'">
          <div v-for="(path,index) in $parent.activePaths.folderList" :key="index" :id="'path'+index"  class="flex-row item"
               @dblclick="keepGoing(path.file,path.type)"
               @click="changeSelectedPath(path.file,index)">
            <font-awesome-icon v-if="path.type==='disk'" class="icon d-inline-flex" icon="floppy-disk"/>
            <font-awesome-icon v-else-if="path.type==='dir'" class="icon d-inline-flex" icon="folder"/>
            <font-awesome-icon v-else class="icon d-inline-flex" icon="file"/>
            <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">
              {{ path.file }}</p>
          </div>
        </div>
        <div v-else-if="$parent.whatWillDirModel==='ftp'">
          <div v-for="(path,index) in $parent.activePaths.folderList" :key="index" :id="'path'+index"  class="flex-row item"
               @dblclick="keepGoing(path.file,path.type)"
               @click="changeSelectedPath(path.file,index)">
            <font-awesome-icon v-if="path.type==='disk'" class="icon d-inline-flex" icon="floppy-disk"/>
            <font-awesome-icon v-else-if="path.type==='dir'" class="icon d-inline-flex" icon="folder"/>
            <font-awesome-icon v-else class="icon d-inline-flex" icon="file"/>
            <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">
              {{ path.file }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-end">
      <button @click="cancel">CANCEL</button>
      <button @click="add">ADD</button>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner';
export default {
	name: 'DirectoryModel',
	components: {Spinner},
	data() {
		return {
			path: '',
			selectedPath: null,
		};
	},
	methods: {
		keepGoing(path, type) {
			if (this.$parent.whatWillDirModel === 'client') {
				if (type !== 'file') {
					this.path += (path + '/');
					this.$io.to(this.$parent.client.socketId).emit('fetch_directory_listing', {fetch_directory: this.path});
					this.changeSelectedPath(this.path);
					this.$parent.activePaths = null;
				}
			} else if (this.$parent.whatWillDirModel === 'ftp') {
				console.log('pass');
			}
		},
		returnTopDir(path) {
			if (this.$parent.whatWillDirModel === 'client') {
				if (this.$parent.activePaths.platform === 'win32') {
					const isTop = path.split('/').length === 2;
					if (isTop) {
						this.$parent.activePaths = null;
						this.path = '';
						this.selectedPath = null;
						this.$io.to(this.$parent.client.socketId)
							.emit('fetch_directory_listing', {fetch_directory: 'DISK'});
					} else {
						this.$parent.activePaths = null;
						this.path = this.findTopDir();
						this.selectedPath = this.path;
						this.$io.to(this.$parent.client.socketId).emit('fetch_directory_listing', {fetch_directory: this.path});
					}
				} else {
					this.$io.to(this.$parent.client.socketId).emit('fetch_directory_listing', {fetch_directory: path});
				}
			} else if (this.taskType === 1) {
				console.log('pass');
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
		changeSelectedPath(path, index) {
			if (this.$parent.whatWillDirModel === 'client') {
				if (this.path !== path) {
					this.selectedPath = this.path + path + '/';
				}

				for (let i = 0; i < this.$parent.activePaths.folderList.length; ++i) {
					document.getElementById('path' + i).style.backgroundColor = 'transparent';
				}

				document.getElementById('path' + index).style.backgroundColor = '#ececec';
			} else if (this.taskType === 1) {
				console.log('pass');
			}
		},
		add() {
			if (this.$parent.whatWillDirModel === 'client') {
				this.$parent.client.sourcePaths.push(this.selectedPath);
			} else if (this.taskType === 1) {
				console.log('pass');
			}

			this.$parent.directoryModelShow = false;
		},
		cancel() {
			if (this.$parent.whatWillDirModel === 'client') {
				this.$parent.activePaths = null;
				this.path = '';
			} else if (this.taskType === 1) {
				console.log('pass');
			}

			this.$parent.directoryModelShow = false;
		},
	},
};
</script>

<style scoped>

</style>
