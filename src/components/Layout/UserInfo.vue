<script setup>
import { ref } from 'vue'
import axios from 'axios'

import { useAxiosStore } from '@/stores/useAxiosStore'
import { useAuthStore } from '@/stores/useAuthStore'

import provincias from '../../../provincias'

const axiosStore = useAxiosStore()
const authStore = useAuthStore()

const USER_DATA = ref([])
const PREFERENCES = ref([])

const USERNAME = ref(USER_DATA.value.username)
const FIRST_NAME = ref(USER_DATA.value.firstName)
const LAST_NAME = ref(USER_DATA.value.lastName)
const EMAIL = ref(USER_DATA.value.email)
const PASSWORD = ref(USER_DATA.value.password)
const AGE = ref(USER_DATA.value.edad)

const getAllPreferences = async () => {
  axios.get(axiosStore.URL_API + '/preferences', axiosStore.config).then((response) => {
    PREFERENCES.value = response.data
  })
}

const getUserInfo = () => {
  try {
    axios
      .get(axiosStore.URL_API + '/users/' + authStore.getUserId, axiosStore.config)
      .then((response) => {
        USER_DATA.value = response.data
      })
  } catch (error) {
    console.error(error)
  }
}

const isFav = (preference) => {
  if (USER_DATA.value != undefined) {
    return USER_DATA.value.preferences.some((p) => p.name === preference.name)
  }
}

const updateUser = async () => {
  const newData = {
    username: USERNAME,
    firstName: FIRST_NAME,
    lastName: LAST_NAME,
    password: PASSWORD,
    edad: AGE,
    email: EMAIL
  }
  try {
    axios
      .put(axiosStore.URL_API + '/user/' + authStore.getUserId, newData, axiosStore.config)
      .then((response) => {
        console.log(response)
      })
  } catch (e) {
    console.error(e)
  }
}

getUserInfo()
getAllPreferences()
</script>

<template>
  <div class="m-5">
    <h2>Mis datos personales</h2>

    <div class="row g-12">
      <div class="col-md-4">
        <label for="inputUsername" class="form-label">Username</label>
        <input type="text" class="form-control" id="inputUsername" v-model="USERNAME" />
      </div>
      <div class="col-md-4">
        <label for="inputSurname" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="inputName" v-model="FIRST_NAME" />
      </div>
      <div class="col-md-4">
        <label for="inputSurname" class="form-label">Apellidos</label>
        <input type="text" class="form-control" id="inputSurname" v-model="LAST_NAME" />
      </div>
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" v-model="EMAIL" />
      </div>
      <div class="col-md-4">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" v-model="PASSWORD" />
      </div>
      <div class="col-md-6">
        <label for="inputAge" class="form-label">Edad</label>
        <input type="number" class="form-control" id="inputAge" v-model="AGE" />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Provincia</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option v-for="provincia in provincias" :key="provincia">{{ provincia }}</option>
        </select>
      </div>
      <div class="col-md-4">
        <h5 for="inputPreferences" class="form-label mt-2">Preferencias</h5>
        <div v-for="preference in PREFERENCES" :key="preference.id">
          <input
            class="form-check-input"
            :checked="isFav(preference)"
            type="checkbox"
            :id="preference.id"
          />
          <label class="form-check-label ms-2" for="preference">{{ preference.name }} </label>
        </div>
      </div>
      <div class="col-12">
        <button @click="updateUser(USER_DATA.id)" type="submit" class="btn btn-primary m-2">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>
