<template>
  <div>
    <div class="form-group">
      <label for="hour">Hour</label>
      <input v-model="$parent.shecdule.hour" type="time" class="form-control" id="hour">
    </div>
    <div class="form-group">
      <label for="day-of-the-week">Day of the week</label>
      <select @change="$parent.shecdule.dayOfWeek = $event.target.value" class="form-control" id="day-of-the-week">
        <option value="0">Monday</option>
        <option value="1">Tuesday</option>
        <option value="2">Wednesday</option>
        <option value="3">Thursday</option>
        <option value="4">Friday</option>
        <option value="5">Saturday</option>
        <option value="6">Sunday</option>
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
