<script setup>
  import GameCard from '@/components/GameCard.vue'
  import PaginationGame from '@/components/PaginationGame.vue'
  //import TrendingGame from '@/components/TrendingGame.vue';
  import axios from 'axios'
  import { ref, computed } from 'vue'

  const GAMES = ref([])
  // const TRENDING = ref([])

  window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
  });

  const getGames = async () => {
  axios.get('http://localhost:8080/api/games?page=0').then((response) => {
    GAMES.value = response.data.content
    console.log(GAMES.value)
  })
}

  onMounted(() => {
    getGames()
  })

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 70px; height: 70px;">
          KairósGames
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <form class="d-flex justify-content-center align-items-center w-50">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
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
      <div class="col-2 bg-light position-fixed top-0 start-0" style="height: auto; text-align: center; margin-top: 100px;"><!-- Contenedor izquierda superpuesto -->
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
      </div>

      <div class="col bg-light"></div><!-- Contenedor central -->

      <div class="col-2 bg-light position-fixed top-0 end-0" style="height: auto; text-align: center; margin-top: 100px;"><!-- Contenedor derecha superpuesto -->
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
      </div>
    </div>

    <div class="row">
        <div class="col-2 bg-light"></div><!-- Contenedor izquierda -->
        <div class="col bg-light"><!-- Contenedor central superpuesto -->
          <div class="row bg-light" style="justify-content: center;">
            <h2>Games Trending</h2>
           <!--  <template v-for="game in TRENDING" :key="game.id">
              <div class="col-md-4">
              <div id="card" class="m-3">
                <TrendingGame :game="game" />
              </div>
            </div> 
            </template> -->
            <h2>Games</h2>
            <template v-for="game in GAMES" :key="game.id">
              <div class="col-md-4">
              <div id="card" class="m-3">
                <GameCard :game="game" />
              </div>
            </div> 
            </template>
          </div>
        </div>
        <div class="col-2 bg-light"></div><!-- Contenedor derecha -->
    </div>
</div>
<footer class="bg-light fixed-bottom" id="footer" style="display: none;">
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center">
                Footer
            </div>
        </div>
    </div>
</footer>
</template>

<style scoped>
#card{
  display: grid;
}
</style>