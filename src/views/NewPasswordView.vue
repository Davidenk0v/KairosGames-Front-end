<script setup>
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
</script>
<template>
  <NavBarNoSearch>Restablecer contraseña</NavBarNoSearch>
  <div class="col m-5">
    <component v-if="MESSAGE != ''" :is="ALERT">{{ MESSAGE }}</component>
    <h5>Reestablezca su contraseña</h5>
    <div class="form-floating mb-5">
      <input
        type="password"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="EMAIL"
      />
      <label for="floatingInput">Introduce la nueva contraseña</label>
    </div>
    <div class="form-floating mb-5">
      <input
        type="password"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="EMAIL"
      />
      <label for="floatingInput">Vuelve a introducir la nueva contraseña</label>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-outline-primary">Cambiar contraseña</button>
    </div>
  </div>
  <FooterComponent id="footer" />
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
