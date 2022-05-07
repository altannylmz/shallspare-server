<template>
  <div class="form-group">
    <label for="hour">Hour</label>
    <input v-model="$parent.shecdule.hour" type="time" class="form-control" id="hour">
  </div>
</template>

<script>
export default {
	name: 'TimingDaily',
};
</script>

<style scoped>

</style>
