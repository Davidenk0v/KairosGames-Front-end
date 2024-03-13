<script setup>
import axios from 'axios'
import { ref } from 'vue'
import GameCard from '@/components/GameCard.vue'

const GAMES = ref([1, 2, 3, 4, 5, 6, 7])

const getGames = async () => {
  axios
    .get('http://localhost:8080/api/games')
    .then((response) => {
      GAMES.value = response.data
    })
    .catch((error) => {
      console.error('Error al obtener los juegos', error)
    })
}

getGames()
</script>
<template>
  <h1>Games</h1>
  <div class="grid grid-cols-4 gap-4" v-for="game in GAMES" :key="game.id">
    <GameCard class="" :game="game" />
  </div>
</template>
