<template>
  <div>
    <div class="form-group">
      <label for="hour">Hour</label>
      <input type="time" class="form-control" id="hour">
    </div>
    <div class="form-group">
      <label for="day-of-the-week">Day of the week</label>
      <select class="form-control" id="day-of-the-week">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
	name: 'TimingWeekly',
};
</script>

<style scoped>

</style>
