<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

import router from '@/router'

const USERNAME = ref('')
const PASSWORD = ref('')
const MESSAGE = ref('')
const URL_LOGIN = 'http://localhost:8080/auth/login'

const login = () => {
  const data = {
    username: USERNAME.value,
    password: PASSWORD.value
  }

  axios
    .post(URL_LOGIN, data)
    .then((response) => {
      if (response.status === 200) {
        MESSAGE.value = 'Login exitoso'
        sessionStorage.setItem('token', response.data.token)
        console.error(response.data)
        router.push('/')
      } else {
        router.push('/login')
        MESSAGE.value = 'Error al iniciar sesión'
      }
    })
    .catch((error) => {
      console.error('Error en cositas', error)
    })
}
</script>
<template>
  <!-- NOMBRE DEL USUARIO -->
  <div class="container-fluid h-100 pb-5">
    <div class="pt-5 mb-3 mt-5 row">
      <div class="col-sm-3 col-form-label"></div>
      <div class="col-sm-5">
        <label for="inputPassword">Nombre de usuario</label>
        <input type="text" class="form-control" id="inputName" name="username" v-model="USERNAME" />
      </div>
    </div>
    <!-- PASSWORD DEL USUARIO -->
    <div class="mb-3 row">
      <div class="col-sm-3 col-form-label"></div>
      <div class="col-sm-5">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" v-model="PASSWORD" />
      </div>
    </div>
    <!-- BOTONES -->
    <div class="mb-3 row">
      <div class="col-sm-3 col-form-label"></div>
      <div class="col-sm-8">
        <input @click="login()" type="submit" class="btn btn-success" value="Entrar" />
        <router-link class="btn btn-link" to="/register">Crear cuenta</router-link>
      </div>
    </div>
    <!-- OLVIDE MI CONTRASEÑA -->
    <div class="mb-3 row">
      <div class="col-sm-3 col-form-label"></div>
      <div class="col-sm-8">
        <router-link class="btn btn-link" to="/forgot-password">Olvidé mi contraseña</router-link>
      </div>
    </div>
  </div>
</template>
