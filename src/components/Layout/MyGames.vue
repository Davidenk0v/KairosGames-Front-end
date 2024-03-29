<script setup>
import axios from 'axios'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { useAuthStore } from '@/stores/useAuthStore'
import { ref } from 'vue'
import CardMyGames from '@/components/CardMyGames.vue'

const axiosStore = useAxiosStore()
const authStore = useAuthStore()
const USER_GAMES = ref([])

const getUserGames = async () => {
  try {
    axios
      .get(axiosStore.URL_API + '/user/games/' + authStore.getUserId, axiosStore.config)
      .then((response) => {
        USER_GAMES.value = response.data
      })
  } catch (e) {
    console.error(e)
  }
}
getUserGames()
</script>
<template>
  <div class="m-5">
    <h2>Mis juegos</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="game in USER_GAMES" :key="game.id" class="col">
        <!-- CARD -->
        <CardMyGames :game="game" />
      </div>
    </div>
  </div>
</template>
