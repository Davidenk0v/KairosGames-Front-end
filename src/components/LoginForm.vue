<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <!-- EMAIL DEL USUARIO -->
  <div class="mb-3 mt-5 row">
    <label for="relleno" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-8">
      <label for="inputPassword">Email</label>
      <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>
  <!-- PASSWORD DEL USUARIO -->
  <div class="mb-3 row">
    <label for="relleno" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-8">
      <label for="inputPassword">Password</label>
      <input type="password" class="form-control" id="inputPassword" />
    </div>
  </div>
  <!-- BOTONES -->
  <div class="mb-3 row">
    <label for="relleno" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-8">
      <button type="button" class="btn btn-success">Entrar</button>
      <router-link class="btn btn-link" to="/create-account">Crear cuenta</router-link>
    </div>
  </div>
  <!-- OLVIDE MI CONTRASEÑA -->
  <div class="mb-3 row">
    <label for="relleno" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-8">
      <router-link class="btn btn-link" to="/forgot-password">Olvidé mi contraseña</router-link>
    </div>
  </div>
</template>
