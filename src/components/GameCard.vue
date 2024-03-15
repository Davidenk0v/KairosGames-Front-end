<script setup>
const props = defineProps(['game'])
const game = props.game
</script>

<template>
  <div class="card" style="width: 19rem; height: 30rem">
    <img class="card-img-top" :src="game.urlImg" :alt="game.name" width="262px" height="150px" />
    <div class="card-body">
      <h4 class="card-title">{{ game.name }}</h4>
      <h5 class="font-weight-blod">{{ game.actualPrice }} €</h5>
      <p>Historial de precios:</p>
      <p class="text-success">Más bajo: {{ game.lowerPrice }} €</p>
      <p class="text-danger">Más alto: {{ game.higherPrice }} €</p>
      <a :href="game.urlPage" class="btn btn-primary">Ir a {{ game.shop }}</a>
      <a :href="game.urlPage" class="btn btn-danger btn-btn-lg"
        ><link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      /></a>
    </div>
  </div>
</template>
