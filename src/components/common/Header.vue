<template>
  <div class="header flex-row container-fluid position-fixed sticky-top p-0">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row">
          <img class="logo img-fluid" src="@/assets/images/logo.png" alt="">
          <div class="d-flex p-1">
            <p class="mt-auto m-0">ShallSpare</p>
            <p class="mt-auto mx-1 m-0 version">v0.9.1</p>
          </div>
        </div>
        <div class="p-2">
          <i class="m-1 i-Minimize-Window"></i>
          <i class="m-1 i-Full-Screen"></i>
          <i class="m-1 i-Close-Window"></i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
	name: 'AppHeader',
};
</script>

<style scoped>

</style>
