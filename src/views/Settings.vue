<template>
  <div class="settings-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column position-relative">
      <div class="row justify-content-between">
        <div class="col">
          <p class="title text-purple">Settings</p>
          <hr>
        </div>
      </div>
      <div class="form-group w-50">
        <label for="interface-language">Interface Language</label>
        <select v-model="lang" class="form-control" id="task-types" name="taskTypes">
          <option value="en">English</option>
          <option value="tr">Turkish</option>
        </select>
      </div>
      <div class="form-group w-50">
        <label for="name">Socket Port</label>
        <input v-model="port" type="number" class="form-control" id="name">
        <button @click="setPort" class="min-btn my-2 px-4">Set</button>
      </div>
      <div class="information">
        <p>Bağlantıyı Http ile koru</p>
        <small>Pasif hale getirmek güvenlik riskleri oluşturur.</small>
        <div class="form-check form-switch">
          <input v-model="https" class="my-auto mt-2 form-check-input" type="checkbox" id="flexSwitchCheckDefault">
          <label class="my-auto mt-1 form-check-label" for="flexSwitchCheckDefault">Https On</label>
        </div>
      </div>
      <div class="information mt-2">
        <p>Task Notification</p>
        <div class="form-check form-switch">
          <input v-model="notification" class="my-auto mt-2 form-check-input" type="checkbox" id="flexSwitchCheckDefault">
          <label class="my-auto mt-1 form-check-label" for="flexSwitchCheckDefault">On</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'SettingsView',
	data() {
		return {
			lang: this.$appConfig.get('language'),
			port: this.$appConfig.get('port'),
			https: this.$appConfig.get('httpsSecurity'),
			notification: this.$appConfig.get('notification'),
		};
	},
	methods: {
		setPort() {
			console.log(this.port);
			if (this.port === null || this.port === '') {
				this.$notify.warning('Fill Port Area');
			} else {
				this.$appConfig.set('port', this.port);
			}
		},
	},
	watch: {
		lang() {
			console.log(this.lang);
		},
		https() {
			console.log(this.https);
		},
		notification() {
			console.log(this.notification);
		},
	},
};
</script>

<style scoped>

</style>
