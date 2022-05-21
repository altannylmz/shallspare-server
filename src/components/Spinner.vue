<template>
  <div
      class="
      start-0
      top-0
      h-100
      w-100
      position-absolute
      d-flex
      align-items-center
      justify-content-center
      z-brd-1000
    "
  >
    <div class="position-absolute start-0 top-0 h-100 w-100"></div>
    <HalfCircleSpinner :size="30" :animation-duration="1200" color="#525252" />
  </div>
</template>

<script>
export default {
	name: 'LoadSpinner',
};
</script>

<style scoped>

</style>
