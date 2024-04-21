<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// import FooterPage from '@/components/FooterPage.vue'

const GAME = ref([])

const props = defineProps(['name'])
const name = props.name

const getGame = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/games/name/' + name)
    GAME.value = response.data
    console.log(GAME.value)
    console.log(name)
  } catch (error) {
    console.error('Error fetching game:', error)
  }
}

console.log(GAME.value)

onMounted(() => {
  getGame()
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
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/register">Create Account</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-disabled="true">My Account</a>
          </li>
        </ul>
      </div>
    </nav>
  
    <div class="container-fluid">
      <div class="row">
            <div class="col-2 bg-light position-fixed top-0 start-0" style="height: auto; text-align: center; margin-top: 100px;"><!-- Contenedor izquierda superpuesto -->
            <img src="../../public/publicidad/publi1.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px;">
            <img src="../../public/publicidad/publi2.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
            <img src="../../public/publicidad/publi10.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
            <img src="../../public/publicidad/publi7.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
            </div>
    
            <div class="col bg-light"></div>
            <!-- Contenedor central -->
    
            <div class="col-2 bg-light position-fixed top-0 end-0" style="height: auto; text-align: center; margin-top: 100px;">
            <!-- Contenedor derecha superpuesto -->
            <img src="../../public/publicidad/publi11.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"/>
            <img src="../../public/publicidad/publi16.jpeg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px"/>
            <img src="../../public/publicidad/publi14.png" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px" />
            <img src="../../public/publicidad/publi8.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px" />
            <img src="../../public/publicidad/publi15.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px"/>
            </div>
      </div>
        <div class="row">
          <div class="col-2 bg-light "></div><!-- Contenedor izquierda -->
          <div class="col bg-light"><!-- Contenedor central superpuesto -->
              <div class="container">
                  <div class="left">
                  <div class="card" style="width: 20rem; height: 20rem; margin-top: 5rem;">
                    <img :src="GAME.urlImg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-text" style="text-align: center;">{{GAME.name}}</h4>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="card" style="width: 30rem;">
                    <div class="card-header">
                      Featured
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">An item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
            <div class="col-2 bg-light"></div>
            <!-- Contenedor derecha -->
        </div>
        <!-- <div class="row">
            <FooterPage/>
        </div> -->
    </div>
  </template>



<style scoped>
.container {
  overflow: auto;
  height: 100%;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-left: 2rem;
  margin-top: 5rem;
}

li{
  height: 5.7rem;
}
</style>