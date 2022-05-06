<template>
  <div class="support-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column position-relative">
      <div class="row justify-content-between">
        <div class="col">
          <p class="title text-purple">Settings</p>
          <hr>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="subjects">Type</label>
      <select  class="form-control" id="subjects" name="subjects" >
        <option value="null" disabled="" selected="">Select Subject</option>
        <option value="0" id="tasks_client_to_ftp">Technical</option>
        <option value="1" id="tasks_client_to_disk">Suggestion</option>
      </select>
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <input type="text" class="form-control" id="message">
    </div>
    <div class="container-fluid p-0">
      <button class="min-btn mt-2">Send</button>
    </div>
    <hr class="mt-2">
    <div class="donate">
      <p>To support this project, you can make a donation to its current developer</p>
      <img width="300" :src="require('@/assets/images/donate.svg')" alt="">
      <p class="cursor-pointer mt-1 mb-0">Tether(USDT) ERC20 : 0xaEF15c498Ca09758d84352EcCe2760f87c16f092</p>
      <p class="cursor-pointer m-0">Tether(USDT) TRC20 : TFnyQyhCFqccWVw6cnA6hEgn1xy9TS3cT</p>
      <p class="cursor-pointer m-0">Bitcoin : bc1qf87hs5ryqhd4p684dv6uc94pa76drkx8uvw5ka</p>
      <p class="cursor-pointer m-0">BNB : bnb1rvluglc9pa489ssq27g6xcep7e0kr8hcyg6y5e</p>
      <p class="cursor-pointer m-0">ETH : 0xaEF15c498Ca09758d84352EcCe2760f87c16f092</p>
    </div>
  </div>
</template>

<script>
export default {
	name: 'SupportView',
};
</script>

<style scoped>

</style>
