<script setup>
import { GameCard } from '../components/GameCard.vue';

window.addEventListener('scroll', function() {
  var footer = document.getElementById('footer');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.style.display = 'block';
  } else {
      footer.style.display = 'none';
  }
});

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
        <div class="col-2 bg-light" style="height: auto; text-align: center;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        </div>
        <div class="col bg-light">
            <GameCard/>
        </div>
        <div class="col-2 bg-light" style="right: 0; z-index: 0; height: auto; text-align: center;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        </div>
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
</style>