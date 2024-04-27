<script setup>
import axios from 'axios'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { defineAsyncComponent, ref } from 'vue'

const axiosStore = useAxiosStore()

const DangerAlert = defineAsyncComponent(() => import('@/components/DangerAlert.vue'))
const SuccessAlert = defineAsyncComponent(() => import('@/components/SuccessAlert.vue'))
const ALERT = ref(SuccessAlert)
const MESSAGE = ref('')
const LOADING = ref(false)

const scrapper = async () => {
  try {
    LOADING.value = true
    const response = await axios.get(axiosStore.URL_API + '/', axiosStore.config)
    MESSAGE.value = 'Cargando base de datos'
    LOADING.value = false
  } catch (e) {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Hubo uno error al cargar el scrapper'
  }
}
</script>
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Recargar base de datos</h5>
          <p class="card-text">
            Se activa el scrapper para actualizar los datos de los juegos en nuestra base de datos
          </p>
          <div v-if="LOADING" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <button v-else @click="scrapper()" class="btn btn-primary">Recargar</button>
        </div>
      </div>
    </div>
  </div>
</template>
