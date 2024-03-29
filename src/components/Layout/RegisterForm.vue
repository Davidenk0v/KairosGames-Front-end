<script setup></script>
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
      <!-- CUARTO GRUPO -->
      <div class="mb-3 col-md-6 mx-auto text-center">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          <span class="input-group-text">.00</span>
        </div>
      </div>
      <!-- QUINTO GRUPO -->
      <div class="mb-3 col-md-8 mx-auto text-center">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
        </div>
      </div>
      <!-- SEXTO GRUPO -->
      <div class="col-md-8 mx-auto text-center">
        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>
