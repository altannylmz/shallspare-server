<template>
  <div class="sidebar d-flex flex-column justify-content-start vh-100 position-absolute overflow-auto">
    <ul class="list-group">
      <router-link to="/" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Bar-Chart"></i>
        <p class="p-0 m-0">Dashboard</p>
      </router-link>
      <router-link to="/tasks" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Library"></i>
        <p class="p-0 m-0">Tasks</p>
      </router-link>
      <router-link to="/clients" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Network-Window"></i>
        <p class="p-0 m-0">Clients</p>
      </router-link>
      <router-link to="/remote-machines" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Cloud-Computer"></i>
        <p class="p-0 m-0">Remote Machines</p>
      </router-link>
      <router-link to="/databases" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Big-Data"></i>
        <p class="p-0 m-0">Databases</p>
      </router-link>
      <router-link to="/logs" tag="li" class="list-group-item nav-item text-center">
        <i class="i-File-Clipboard-File--Text"></i>
        <p class="p-0 m-0">Logs</p>
      </router-link>
      <router-link to="/settings" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Settings-Window"></i>
        <p class="p-0 m-0">Settings</p>
      </router-link>
      <router-link to="/support" tag="li" class="list-group-item nav-item text-center">
        <i class="i-Support"></i>
        <p class="p-0 m-0">Support</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'AppSideBar',
};
</script>

<style scoped>
</style>
