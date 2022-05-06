<template>
  <div class="header flex-row container-fluid position-fixed sticky-top p-0">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row">
          <img class="logo img-fluid" :src="require('@/assets/images/logo.png')" alt="">
          <div class="d-flex text-start app-name">
            <p class="mt-auto m-0 ">ShallSpare</p>
          </div>
        </div>
        <div class="p-2 buttons">
          <i @click="minimize" class="m-1 i-Minimize-Window"></i>
          <i @click="fullScreen" class="m-1 i-Full-Screen"></i>
          <i @click="closeWindow" class="m-1 i-Close-Window"></i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
	name: 'AppHeader',
	methods: {
		minimize() {
			this.$ipcRenderer.send('minimize');
		},
		fullScreen() {
			this.$ipcRenderer.send('full');
		},
		closeWindow() {
			this.$ipcRenderer.send('hide');
		},
	},
};
</script>

<style scoped>

</style>
