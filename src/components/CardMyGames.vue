<script setup>
import axios from 'axios'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { useAuthStore } from '@/stores/useAuthStore'

const axiosStore = useAxiosStore()
const authStore = useAuthStore()

const props = defineProps(['game'])

const removeFromFav = (gameId) => {
  try {
    axios
      .delete(
        axiosStore.URL_API + '/user/games/' + authStore.getUserId + '/' + gameId,
        axiosStore.config
      )
      .then((response) => {
        console.log(response.data)
        window.location.reload()
      })
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="card">
    <img :src="props.game.urlImg" class="card-img-top" :alt="props.game.name" />
    <div class="card-body">
      <h5 class="card-title">{{ props.game.name }}</h5>
      <h5 class="alert alert-primary">{{ props.game.shop }}: {{ props.game.actualPrice }} €</h5>
      <a :href="props.game.urlPage" class="btn btn-success">Ir a tienda</a>
      <button @click="removeFromFav(props.game.id)" class="btn btn-danger m-2">
        Quitar de favoritos
      </button>
      <fieldset>
        <legend>Historial de precios</legend>
        <p class="alert alert-danger">Precio más alto: {{ props.game.actualPrice }}</p>
        <p class="alert alert-warning">Precio más bajo: {{ props.game.lowerPrice }}</p>
      </fieldset>
    </div>
  </div>
</template>
