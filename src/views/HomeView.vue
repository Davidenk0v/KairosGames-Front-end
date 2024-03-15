<script setup>
  import GameCard from '@/components/GameCard.vue'
  import PaginationGame from '@/components/PaginationGame.vue'
  import TrendingGame from '@/components/TrendingGame.vue';
  import axios from 'axios'
  import { ref, onMounted} from 'vue'


  const GAMES = ref([])
  const TRENDING = ref([])


  const getGames = async () => {
    axios.get('http://localhost:8080/api/games?page=0').then((response) => {
      GAMES.value = response.data.content
    })
  }

  const getTrendingGames = async () => {
    axios.get('http://localhost:8080/api/games/trending').then((response) => {
      TRENDING.value = response.data
      console.log(TRENDING.value)
    })
  }

  onMounted(() => {
    getGames()
    getTrendingGames();
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
        <img src="../../public/publicidad/publi1.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px;">
        <img src="../../public/publicidad/publi2.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
        <img src="../../public/publicidad/publi10.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
        <img src="../../public/publicidad/publi7.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
      </div>

      <div class="col bg-light"></div><!-- Contenedor central -->

      <div class="col-2 bg-light position-fixed top-0 end-0" style="height: auto; text-align: center; margin-top: 100px;"><!-- Contenedor derecha superpuesto -->
        <img src="../../public/publicidad/publi11.jpg" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px;">
        <img src="../../public/publicidad/publi16.jpeg" alt="KairósGames Logo" style="width: 100%; height: 110px; margin-bottom: 5px;">
        <img src="../../public/publicidad/publi14.png" alt="KairósGames Logo" style="width: 100%; height: 100%; margin-bottom: 5px;">
        <img src="../../public/publicidad/publi8.jpg" alt="KairósGames Logo" style="width: 100%; height: 130px; margin-bottom: 5px;">
        <img src="../../public/publicidad/publi15.jpg" alt="KairósGames Logo" style="width: 100%; height: 90px; margin-bottom: 5px;">
      </div>
    </div>
    <div class="row">
        <div class="col-2 bg-light"></div><!-- Contenedor izquierda -->
        <div class="col bg-light"><!-- Contenedor central superpuesto -->
            <div class="row" style="justify-content: center;">
              <h2>Games Trending</h2>
              <div id="trending">
                <div id="trendingBody">
                  <!-- <Swiper :modules="[EffectCube]" effect="cube">
                    <SwiperSlide v-for="trending in TRENDING" :key="trending.id">
                      <div class="swiper-slide">
                          <TrendingGame :trending="trending" />
                      </div>
                    </SwiperSlide>
                  </Swiper> -->
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
              <PaginationGame/>
            </div>
        </div>
        <div class="col-2 bg-light"></div><!-- Contenedor derecha -->
    </div>
    <div class="row">
      <footer class="bg-light position-absolute" id="footer" >
        <div class="container-fluid">
          <div class="row">
            <div class="col text-center">
              Footer
            </div>
          </div>
        </div>
      </footer>
    </div>
</div>

</template>

<style scoped>
#card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#card:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}



</style>