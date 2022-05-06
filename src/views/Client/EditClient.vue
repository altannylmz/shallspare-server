<template>
  <div class="edit-client-page content position-absolute start-0 end-0 px-4">
    <form @submit.prevent="updateClient" class="bg-white shadow-sm p-4">
      <p class="text-start">
        Clients>Edit Client
      </p>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="client.name" readonly type="text" class="form-control" id="name">
      </div>
      <div class="form-group">
        <label for="tag">Tag</label>
        <input v-model="client.tag" type="text" class="form-control" id="tag">
      </div>
      <div class="form-group">
        <label for="ip">IP</label>
        <input v-model="client.ip" readonly type="text" class="form-control" id="ip">
      </div>
      <button type="submit" class="container-fluid text-center">Update</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'EditClient',
	data() {
		return {
			client: {
				id: '',
				name: '',
				tag: '',
				ip: '',
			},
		};
	},
	methods: {
		updateClient() {
			if (this.client.tag.length) {
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
