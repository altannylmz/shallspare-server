<template>
  <div v-if="$parent.directoryModelShow" class="directory-model text-start p-2 shadow shadow-lg">
    <input class="container-fluid" type="text" value="C:/Users/Altan/Desktop">
    <div class="top-item">
      <font-awesome-icon class="icon d-inline-flex" icon="angle-left"/>
      <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">C:/Users/Altan/Desktopasdfsadfd</p>
    </div>
    <div class="directory-list overflow-auto">
      <div v-for="i in [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]" :key="i" class="flex-row item">
          <font-awesome-icon class="icon d-inline-flex" icon="folder"/>
          <p data-toggle="tooltip" data-placement="top" title="Tooltip on top" class="path flex-grow-1 d-inline-flex">C:/Users/Altan/Desktopasdfsadfd</p>
      </div>
    </div>
    <div class="text-end">
      <button @click="$parent.directoryModelShow=false">CANCEL</button>
      <button>OK</button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'DirectoryModel',
	data() {
	},
};
</script>

<style scoped>

</style>
