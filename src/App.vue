<template>
  <div>
    <Header/>
    <router-view> </router-view>
    <SideBar/>
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import SideBar from '@/components/common/SideBar';
export default {
	name: 'App',
	components: {Header, SideBar},
	mounted() {
		console.log(this.$db);
	},
};
</script>

<style>
</style>
