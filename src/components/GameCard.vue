<script setup>
const props = defineProps(['game'])
const game = props.game
</script>

<template>
  <div class="card" style="width: 19rem; height: 25rem">
    <img class="card-img-top" :src="game.urlImg" :alt="game.name" width="262px" height="150px" />
    <div class="card-body">
      <h5 class="card-title">{{ game.name }}</h5>
      <h5 class="font-weight-blod">{{ game.actualPrice }} €</h5>
      <p>Historial de precios:</p>
      <p class="text-success">Más bajo: {{ game.lowerPrice }} €</p>
      <p class="text-danger">Más alto: {{ game.higherPrice }} €</p>
    </div>
  </div>
  
</template>
