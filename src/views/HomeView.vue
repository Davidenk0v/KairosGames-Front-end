<script setup>
import GameCard from '@/components/GameCard.vue'
import axios from 'axios'
import { ref, computed } from 'vue'

const GAMES = ref([])

window.addEventListener('scroll', function () {
  var footer = document.getElementById('footer')
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    footer.style.display = 'block'
  } else {
    footer.style.display = 'none'
  }
})

const getGames = async () => {
  axios.get('http://localhost:8080/api/games').then((response) => {
    GAMES.value = response.data
  })
}

getGames()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../../public/favicon.ico"
          alt="KairósGames Logo"
          style="width: 70px; height: 70px"
        />
        KairósGames
      </a>
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
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">My Account</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light d-none d-lg-block position-fixed" style="height: 100vh">
        sit amet, consectetur adipiscing elit. Cras quam felis, dignissim vitae mauris quis, porta
        sagittis urna. Cras lectus eros, ullamcorper at faucibus ac, tincidunt vel turpis. Proin
        tempor diam ut ligula molestie convallis. Fusce luctus dolor a nulla maximus sodales. Etiam
        fringilla dui in posuere pellentesque. Fusce fringilla placerat euismod. Nulla auctor eros
        vel ligula gravida, eget molestie ipsum ultricies. Nullam molestie sollicitudin faucibus.
        Proin id sollicitudin dui, et porttitor risus. Donec ultricies, neque in sodales dignissim,
        nibh nibh dictum erat, ut feugiat eros sapien ut erat. Vivamus commodo leo eget velit
        fermentum, quis consequat odio suscipit. Morbi ex sapien, poMorbi ex sapien, poMorbi ex
        sapien, poMorbi ex sapien, poMorbi ex sapien, poMorbi ex sapien, poMorbi ex sapien, poMorbi
        ex sapien, poMorbi ex sapien, poMorbi ex sapien, poMorbi ex sapien, poMorbi ex sapien,
        poMorbi ex sapien, poMorbi ex sapien
      </div>
      <div class="row bg-light">
        <template v-for="game in GAMES" :key="game.id">
          <GameCard :game="game" />
        </template>
      </div>
      <div
        class="col-2 bg-light d-none d-lg-block position-fixed"
        style="right: 0; z-index: 0; height: 100vh"
      >
        sit amet, consectetur adipiscing elit. Cras quam felis, dignissim vitae mauris quis, porta
        sagittis urna. Cras lectus eros, ullamcorper at faucibus ac, tincidunt vel turpis. Proin
        tempor diam ut ligula molestie convallis. Fusce luctus dolor a nulla maximus sodales. Etiam
        fringilla dui in posuere pellentesque. Fusce fringilla placerat euismod. Nulla auctor eros
        vel ligula gravida, eget molestie ipsum ultricies. Nullam molestie sollicitudin faucibus.
        Proin id sollicitudin dui, et porttitor risus. Donec ultricies, neque in sodales dignissim,
        nibh nibh dictum erat, ut feugiat eros sapien ut erat. Vivamus commodo leo eget velit
        fermentum, quis consequat odio suscipit. Morbi ex saandit tortor, eu dndit tortor, eu dndit
        tortor, eu dndit tortor, eu dndit tortor, eu dndit tortor, eu dndit tortor, eu dapibus
        velit. Nullam aliquet pulvinar magna, vitae malesuada justo scelerisque et. Integer finibus
        sapien et justo viverra fermentum. Fusce
      </div>
    </div>
  </div>
  <footer class="bg-light fixed-bottom" id="footer" style="display: none">
    <div class="container-fluid">
      <div class="row">
        <div class="col text-center">Footer</div>
      </div>
    </div>
  </footer>
</template>
