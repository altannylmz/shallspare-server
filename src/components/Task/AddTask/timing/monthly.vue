<template>
  <div>
    <div class="form-group">
      <label for="hour">Hour</label>
      <input v-model="$parent.shecdule.hour" type="time" class="form-control" id="hour">
    </div>
    <div class="form-group">
      <label for="day-of-the-month">Day of the month</label>
      <input v-model="$parent.shecdule.dayOfMonth" type="number" class="form-control" id="day-of-the-month">
    </div>
  </div>
</template>

<script>
export default {
	name: 'TimingMonthly',
};
</script>

<style scoped>

</style>
