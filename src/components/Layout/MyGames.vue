<script setup>
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { ref, computed, defineAsyncComponent } from 'vue'
import CardMyGames from '@/components/CardMyGames.vue'

const axiosStore = useAxiosStore()

const MESSAGE = ref('')
const DangerAlert = defineAsyncComponent(() => import('@/components/DangerAlert.vue'))
const SuccessAlert = defineAsyncComponent(() => import('@/components/SuccessAlert.vue'))
const ALERT = ref(SuccessAlert)
const USER_GAMES = ref([])
const TOKEN = ref(sessionStorage.getItem('token'))
const config = {
  headers: {
    Authorization: `Bearer ${TOKEN.value}`
  }
}

const getUserId = computed(() => {
  if (TOKEN.value != '' || TOKEN.value != null) {
    try {
      const { id } = jwtDecode(TOKEN.value)
      return id
    } catch (e) {
      console.error(e)
    }
  }
  return null
})

const getUserGames = async () => {
  try {
    axios.get(axiosStore.URL_API + '/user/games/' + getUserId.value, config).then((response) => {
      USER_GAMES.value = response.data
    })
  } catch (e) {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Hubo uno error al cargar los juegos'
    console.error(e)
  }
}
getUserGames()
</script>
<template>
  <div class="m-5">
    <h2>Mis juegos</h2>
    <div v-if="USER_GAMES.length > 0" class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="game in USER_GAMES" :key="game.id" class="col w-25 p-3 h-25 d-inline-block">
        <!-- CARD -->
        <CardMyGames :game="game" />
      </div>
    </div>
    <div v-else class="row text-center">
      <div>
        <!-- CARD -->
        <p class="alert alert-warning">Aún no tienes juegos marcados como favoritos</p>
      </div>
    </div>
  </div>
</template>
