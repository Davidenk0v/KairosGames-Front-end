<script setup>
import { RouterLink } from 'vue-router'
import QuestionsForm from '@/components/QuestionsForm.vue'
</script>
<template>
  <div class="container-fluid">
    <form class="row">
      <!-- USERNAME -->
      <div class="mb-4 col-md-8 mx-auto text-center">
        <label for="basic-url" class="form-label">Introduce tu nombre de usuario:</label>
        <div class="input-group">
          <span class="input-group-text" id="username" name="username">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <!-- EMAIL -->
      <div class="mb-3 col-md-8 mx-auto text-center">
        <label for="basic-url" class="form-label">Introduce tu email:</label>
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            placeholder="ejemplo@mail.es"
            aria-label="Recipient's email"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
      <!-- PASSWORD -->
      <div class="mb-3 col-md-8 mx-auto text-center">
        <label for="basic-url" class="form-label">Introduce tu contraseña:</label>
        <div class="input-group col-md-8 mx-auto text-center">
          <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
        <!--CONFIRMAR PASSWORD-->
        <label for="basic-url" class="form-label">Confirma tu contraseña:</label>
        <div class="input-group col-md-8 mx-auto text-center">
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
        <div class="form-text col-md-8 mx-auto text-center" id="basic-addon4">
          <small>Asegurate de que eliges una contraseña segura</small>
        </div>
      </div>
      <!-- SEXTO GRUPO -->
      <div class="col-md-8 mx-auto text-center">
        <div class="input-group" style=" margin-top: 20px;">
          <div class="questionForm"><QuestionsForm/></div>
            
        </div>
      </div>
    </form>
  </div>
</template>

<style>
  .questionForm{
    width: 100%;
  }
</style>