<template>
  <div class="clients-page content position-absolute start-0 end-0 px-4">
    <div class="flex flex-column position-relative">
      <div class="row justify-content-between">
        <div class="col">
          <p class="title">Databases</p>
        </div>
        <div class="col text-end">
          <font-awesome-icon class="add-icon" icon="plus"/>
          <router-link class="add-btn" to="/new-database" tag="button">New Database</router-link>
        </div>
      </div>
      <hr>
      <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="i"
           class="data-row row text-center shadow-sm text-black">
        <div class="col-sm-1 my-auto">{{i}}</div>
        <div class="col-sm-2 my-auto text-start">DB_TYPE</div>
        <div class="col-sm-3 my-auto text-start">DB_TAG</div>
        <div class="col-sm-3 my-auto text-start">DB_NAME</div>
        <div class="col-sm-3 my-auto text-end">
          <div class="dropdown">
            <button class="btn dropdown" data-bs-toggle="dropdown"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <a><font-awesome-icon class="m-1" icon="ellipsis" /></a>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link class="dropdown-item" :to="'/edit-database/'+i" tag="a">
                <font-awesome-icon class="my-auto mx-2" icon="pen"/>
                <p class="d-inline text-end">Edit</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a class="m-1 active-page">1</a>
        <a class="m-1">2</a>
        <a class="m-1">3</a>
        <a class="m-1">4</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'DatabasesView',
};
</script>

<style scoped>

</style>
