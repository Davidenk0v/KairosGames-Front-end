<script setup>
import axios from 'axios'
import { ref } from 'vue'
import GameCard from '@/components/GameCard.vue'

const GAMES = ref([])

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
  <template v-for="game in GAMES.value" :key="game.id">
    <GameCard :game="game" />
  </template>
</template>
