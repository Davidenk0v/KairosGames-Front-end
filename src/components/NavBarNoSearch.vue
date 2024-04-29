<script setup>
import { useAuthStore } from '@/stores/useAuthStore'
import { jwtDecode } from 'jwt-decode'
import { computed } from 'vue'
const store = useAuthStore()

const isAuthenticated = computed(() => {
  const TOKEN = sessionStorage.getItem('token')
  if (TOKEN) {
    try {
      //Descodificamos el TOKEN para saber si el usuario es admin o user
      const { authorities } = jwtDecode(TOKEN)
      if (authorities === 'ROLE_ADMIN' || authorities === 'ROLE_USER') {
        return true
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
  return false
})
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../public/favicon.ico"
          alt="KairósGames Logo"
          style="width: 70px; height: 70px"
        />
        KairósGames
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <h2>
          <slot> Título </slot>
        </h2>
      </div>
      <ul class="navbar-nav">
        <div v-if="!isAuthenticated" class="navbar-nav">
          <li class="nav-item">
            <router-link class="btn btn-light" to="/login">Iniciar sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-light" to="/register">Registrarse</router-link>
          </li>
        </div>
        <div v-else class="navbar-nav">
          <li v-if="isAuthenticated">
            <a class="btn btn-light" aria-disabled="true">Mi cuenta</a>
          </li>
          <li class="nav-item">
            <button
              v-if="isAuthenticated"
              @click="store.logout()"
              class="btn btn-light"
              aria-disabled="true"
            >
              Cerrar sesión
            </button>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>
