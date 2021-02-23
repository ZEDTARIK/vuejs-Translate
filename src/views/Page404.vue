<template>
  <div class="row my-3">
    <div class="col-md-10 mx-auto">
      <router-link :to="{ name: 'Home' }" class="btn btn-danger"
        >Return</router-link
      >
    </div>
  </div>
  <div class="row my-3">
    <div class="col-md-10 mx-auto">
      <div class="card border-danger">
        <img
          class="card-img-top"
          src="../assets/404.png"
          alt="Page Not Found"
        />
        <div class="card-body">
          <h2 class="text-center">Page Not Found</h2>
          <h3 class="text-center">404</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>