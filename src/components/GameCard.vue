<script setup>
const props = defineProps(['game'])
const game = props.game
</script>

<template>
  <div class="card" style="width: 19rem; height: 22rem;">
    <img class="card-img-top" :src="game.urlImg" :alt="game.name" width="262px" height="150px" />
    <div class="card-body">
      <hr>
      <h5 class="card-title">{{ game.name }}</h5>
      <h5 class="font-weight-blod">Desde: {{ game.actualPrice }} €</h5>
      <hr>
    </div>
  </div>
  
</template>

<style>

</style>
