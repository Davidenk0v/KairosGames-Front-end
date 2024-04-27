<script setup>
const props = defineProps(['game'])
const game = props.game
</script>

<template>
  <div class="card" style="width: 19rem; height: 22rem;overflow: hidden;">
    <img class="card-img-top" :src="game.urlImg" :alt="game.name" width="100%" style="max-height: calc(100% - 11rem); object-fit: cover;"/>
    <div class="card-body">
      <hr>
      <h5 class="card-title">{{ game.name }}</h5>
      <h5 class="font-weight-blod">Desde: {{ game.actualPrice }} €</h5>
    </div>
  </div>
  
</template>

<style>

</style>
