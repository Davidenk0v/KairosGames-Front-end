<script setup>
import axios from 'axios'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { ref, computed, onMounted } from 'vue'
import { jwtDecode } from 'jwt-decode'

const axiosStore = useAxiosStore()

const props = defineProps(['game'])
const game = props.game

const TOKEN = ref(sessionStorage.getItem('token'))
const USER_GAMES = ref([])
const config = {
  headers: {
    Authorization: `Bearer ${TOKEN.value}`
  }
}
const isAuthenticated = computed(() => {
  if (TOKEN.value) {
    try {
      //Descodificamos el TOKEN para saber si el usuario es admin o user
      const { authorities } = jwtDecode(TOKEN.value)
      if (authorities === 'ROLE_ADMIN' || authorities === 'ROLE_USER') {
        return true
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
  return false
})

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

const addGameToFav = async (idGame) => {
  axios
    .get(axiosStore.URL_API + `/user/games/add/${getUserId.value}/${idGame}`, config)
    .then((response) => {
      checkListFav()
    })
    .catch((error) => {
      console.error(error)
    })
}

const deleteGameToFav = async (idGame) => {
  axios
    .delete(axiosStore.URL_API + `/user/games/${getUserId.value}/${idGame}`, config)
    .then((response) => {
      checkListFav()
    })
    .catch((error) => {
      console.error(error)
    })
}

const checkListFav = async () => {
  axios.get(axiosStore.URL_API + `/user/games/${getUserId.value}`, config).then((response) => {
    USER_GAMES.value = response.data
  })
}

const isGameFavorite = (idGame) => {
  if (USER_GAMES.value.length > 0) {
    for (let i = 0; i < USER_GAMES.value.length; i++) {
      if (USER_GAMES.value[i].id === idGame) {
        return true
      }
    }
  }
  return false
}

onMounted(() => {
  checkListFav()
})
</script>

<template>
  <div class="card" style="width: 19rem; height: 22rem; overflow: hidden">
    <img
      class="card-img-top"
      :src="game.urlImg"
      :alt="game.name"
      width="100%"
      style="max-height: calc(100% - 11rem); object-fit: cover"
    />
    <div class="card-body">
      <h4 class="card-title">{{ game.name }}</h4>
      <h5 class="font-weight-blod">{{ game.actualPrice }} €</h5>
      <p>Historial de precios:</p>
      <p class="text-success">Más bajo: {{ game.lowerPrice }} €</p>
      <p class="text-danger">Más alto: {{ game.higherPrice }} €</p>
      <a :href="game.urlPage" class="btn btn-primary">Ir a {{ game.shop }}</a>
      <template v-if="isAuthenticated">
        <button
          v-if="isGameFavorite(game.id)"
          :href="game.urlPage"
          class="btn"
          @click="deleteGameToFav(game.id)"
        >
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.8824 12.9557L10.5021 19.3071C11.2981 20.2067 12.7019 20.2067 13.4979 19.3071L19.1176 12.9557C20.7905 11.0649 21.6596 8.6871 20.4027 6.41967C18.9505 3.79992 16.2895 3.26448 13.9771 5.02375C13.182 5.62861 12.5294 6.31934 12.2107 6.67771C12.1 6.80224 11.9 6.80224 11.7893 6.67771C11.4706 6.31934 10.818 5.62861 10.0229 5.02375C7.71053 3.26448 5.04945 3.79992 3.59728 6.41967C2.3404 8.6871 3.20947 11.0649 4.8824 12.9557Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 7L11.3093 9.07203C11.1142 9.65754 11.2002 10.3004 11.5426 10.8139L12.2604 11.8906C12.7083 12.5624 12.7083 13.4376 12.2604 14.1094L11.513 15.2305C11.1876 15.7186 11.0929 16.3251 11.2541 16.8893L12 19.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <button
          v-if="!isGameFavorite(game.id)"
          :href="game.urlPage"
          class="btn"
          @click="addGameToFav(game.id)"
        >
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                fill="#ff0000"
              ></path>
            </g>
          </svg>
        </button>
      </template>
    </div>
  </div>
</template>

<style></style>
