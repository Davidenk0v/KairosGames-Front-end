<script setup>
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
</script>

<template>
  <NavBarNoSearch>Se ha restablecido su contraseña</NavBarNoSearch>
  <div class="col m-5">
    <div class="d-flex justify-content-center">
      <router-link to="/login" class="btn btn-outline-primary">Volver al login</router-link>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
