<template>
 
 <div class="container">
   <div class="row mt-2">
     <div class="col-md-12">
       <Navbar />
     </div>
   </div>

   <div>
      <router-view />
    </div>

 </div>


</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
