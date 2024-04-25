<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'

import GameCard from '@/components/GameCard.vue'
import PaginationGame from '@/components/PaginationGame.vue'
import TrendingGame from '@/components/TrendingGame.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { jwtDecode } from 'jwt-decode'
import FooterPage from '@/components/FooterPage.vue'

const store = useAuthStore()

const URL_API = 'http://localhost:8080/api'
const GAMES = ref([])
const TRENDING = ref([])
const CURRENT_PAGE = ref(0)
const TOTAL_PAGES = ref(0)
const SEARCH = ref('')

window.addEventListener('scroll', function () {
  let footer = document.getElementById('footer')
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.style.display = 'block'
  } else {
    footer.style.display = 'none'
  }
})

const searchGame = async () => {
  if (SEARCH.value != '') {
    axios.get(`${URL_API}/games/filter/${SEARCH.value}`).then((response) => {
      GAMES.value = response.data
    })
  } else {
    getGames()
  }
}

const getTrendingGames = async () => {
  axios.get(URL_API + '/games/trending').then((response) => {
    TRENDING.value = response.data
  })
}

const getGames = async () => {
  axios.get(`${URL_API}/games?page=${CURRENT_PAGE.value}`).then((response) => {
    GAMES.value = response.data.content
    TOTAL_PAGES.value = response.data.totalPages
  })
}

const nextPage = () => {
  if (CURRENT_PAGE.value + 1 < TOTAL_PAGES.value) {
    CURRENT_PAGE.value++
    getGames()
  }
}

const previusPage = () => {
  if (CURRENT_PAGE.value - 1 >= 0) {
    CURRENT_PAGE.value--
    getGames()
  }
}

const setCurrentPage = (page) => {
  CURRENT_PAGE.value = page
  getGames()
}

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

const isAdmin = computed(() => {
  const token = sessionStorage.getItem('token')
  if (isAuthenticated.value) {
    const { authorities } = jwtDecode(token)
    if (authorities === 'ROLE_ADMIN') {
      return true
    }
  }
  return false
})

onMounted(() => {
  getTrendingGames()
  getGames()
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
        <form class="d-flex justify-content-center align-items-center w-50">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="SEARCH"
            @keyup="searchGame()"
          />
        </form>
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
          <li class="nav-item">
            <router-link to="/myaccount" class="nav-link active" aria-disabled="true"
              >My Account</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin" v-if="isAdmin" class="nav-link active" aria-disabled="true"
              >Modo admin</router-link
            >
          </li>
        </div>
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
      </ul>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <div
        class="col-2 bg-light position-fixed top-0 start-0"
        style="height: auto; text-align: center; margin-top: 100px"
      >
        <!-- Contenedor izquierda superpuesto -->
        <img
          src="../../public/publicidad/publi1.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
        />
        <img
          src="../../public/publicidad/publi2.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi10.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi7.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
      </div>

      <div class="col bg-light"></div>
      <!-- Contenedor central -->

      <div
        class="col-2 bg-light position-fixed top-0 end-0"
        style="height: auto; text-align: center; margin-top: 100px"
      >
        <!-- Contenedor derecha superpuesto -->
        <img
          src="../../public/publicidad/publi11.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
        />
        <img
          src="../../public/publicidad/publi16.jpeg"
          alt="KairósGames Logo"
          style="width: 100%; height: 110px; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi14.png"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi8.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 130px; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi15.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 90px; margin-bottom: 5px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-2 bg-light"></div>
      <!-- Contenedor izquierda -->
      <div class="col bg-light">
        <!-- Contenedor central superpuesto -->
        <div class="row" style="justify-content: center">
          <h2>Games Trending</h2>
          <div id="trendingBody">
            <div class="wrapper">
              <div class="container">
                <template v-for="(trending, index) in TRENDING" :key="index">
                  <TrendingGame :trending="trending" :index="index" />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <h2>Games</h2>
          <template v-for="game in GAMES" :key="game.id">
            <div class="col-md-4">
              <div id="card" class="m-3">
                <GameCard :game="game" />
              </div>
            </div>
          </template>
        </div>
        <div class="row">
          <PaginationGame
            class="d-flex justify-content-center"
            :current_page="CURRENT_PAGE"
            :total_pages="TOTAL_PAGES"
            @next_page="nextPage"
            @previus_page="previusPage"
            @set_current="setCurrentPage"
          />
        </div>
      </div>
      <div class="col-2 bg-light"></div>
      <!-- Contenedor derecha -->
    </div>
    <div class="row">
      <FooterPage />
    </div>
  </div>
</template>

<style scoped>
#card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

#card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
