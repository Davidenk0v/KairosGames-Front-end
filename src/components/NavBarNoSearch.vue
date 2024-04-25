<script setup>
import { useAuthStore } from '@/stores/useAuthStore'
import { jwtDecode } from 'jwt-decode'
import { computed } from 'vue'
const store = useAuthStore()

const isAuthenticated = computed(() => {
  const token = sessionStorage.getItem('token')
  if (token) {
    try {
      //Descodificamos el token para saber si el usuario es admin o user
      const { authorities } = jwtDecode(token)
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
        <div v-if="!isAuthenticated">
          <li class="nav-item">
            <router-link class="nav-link active" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/register">Create Account</router-link>
          </li>
        </div>
        <div v-else>
          <li v-if="!isAuthenticated" class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">My Account</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              v-if="isAuthenticated"
              @click="store.logout()"
              class="nav-link active"
              aria-disabled="true"
              >Cerrar sesión</a
            >
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>
