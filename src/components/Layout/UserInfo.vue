<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

import provincias from '../../../provincias'

import { useAxiosStore } from '@/stores/useAxiosStore'
import { jwtDecode } from 'jwt-decode'

const axiosStore = useAxiosStore()

const USER_DATA = ref([])
const PREFERENCES = ref([])
const CHECKBOX = ref([])
const CHECKBOX_SELECT = ref([])

const USERNAME = ref('')
const FIRST_NAME = ref('')
const LAST_NAME = ref('')
const EMAIL = ref('')
const PASSWORD = ref('')
const AGE = ref('')
const TOKEN = ref(sessionStorage.getItem('token'))
const config = {
  headers: {
    Authorization: `Bearer ${TOKEN.value}`
  }
}

const getAllPreferences = async () => {
  axios.get(axiosStore.URL_API + '/preferences', config).then((response) => {
    PREFERENCES.value = response.data
  })
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

const getUserInfo = () => {
  try {
    axios.get(axiosStore.URL_API + '/users/' + getUserId.value, config).then((response) => {
      USER_DATA.value = response.data
      USERNAME.value = response.data.username
      FIRST_NAME.value = response.data.firstName
      LAST_NAME.value = response.data.lastName
      EMAIL.value = response.data.email
      PASSWORD.value = response.data.password
      AGE.value = response.data.edad
    })
  } catch (error) {
    console.error(error)
  }
}

const updateCheckBox = () => {
  CHECKBOX_SELECT.value = CHECKBOX.value.filter((elem) => elem.selected).map((elem) => elem.name)
  console.log(CHECKBOX_SELECT.value)
}

const isFav = (preference) => {
  if (USER_DATA.value != undefined) {
    return USER_DATA.value.preferences.some((p) => p.name === preference.name)
  }
}

const updateUser = async () => {
  const newData = {
    username: USERNAME.value,
    firstName: FIRST_NAME.value,
    lastName: LAST_NAME.value,
    password: PASSWORD.value,
    edad: AGE.value,
    email: EMAIL.value
  }
  console.log(newData)
  try {
    axios
      .put(axiosStore.URL_API + '/users/' + getUserId.value, newData, config)
      .then((response) => {
        console.log(response)
      })
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  getUserInfo()
  getAllPreferences()
  updateCheckBox()
})
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
            @change="updateCheckBox()"
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
