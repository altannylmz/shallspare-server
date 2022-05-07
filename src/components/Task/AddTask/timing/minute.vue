<template>
  <div class="form-group">
    <label for="minute">Minute</label>
    <input v-model="$parent.shecdule.minute" type="number" class="form-control" id="minute">
  </div>
</template>

<script>
export default {
	name: 'TimingMinute',
};
</script>

<style scoped>

</style>
