<script setup>
import axios from 'axios'
import { useAxiosStore } from '@/stores/useAxiosStore'
import { defineAsyncComponent, onMounted, ref } from 'vue'

const axiosStore = useAxiosStore()
const USERS = ref([])

const DangerAlert = defineAsyncComponent(() => import('@/components/DangerAlert.vue'))
const SuccessAlert = defineAsyncComponent(() => import('@/components/SuccessAlert.vue'))
const ALERT = ref(SuccessAlert)
const MESSAGE = ref('')

const getAllUsers = async () => {
  try {
    const response = await axios.get(axiosStore.URL_API + '/users', axiosStore.config)
    USERS.value = response.data
  } catch (e) {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Hubo uno error al cargar los usuarios'
  }
}

const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(axiosStore.URL_API + '/users/' + userId, axiosStore.config)
    MESSAGE.value = 'Usuario eliminado'
    console.info = response.data
    getAllUsers()
  } catch (e) {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Hubo uno error al eliminar el usuario'
  }
}

const editUser = async (user) => {
  const newUser = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    edad: user.edad,
    email: user.email
  }
  try {
    const response = await axios.put(
      axiosStore.URL_API + '/users/' + user.id,
      newUser,
      axiosStore.config
    )
    MESSAGE.value = 'Usuario editado correctamente'
  } catch (e) {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Hubo uno error al editar el usuario'
  }
}

onMounted(() => {
  getAllUsers()
})
</script>
<template>
  <component v-if="MESSAGE != ''" :is="ALERT">{{ MESSAGE }}</component>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Usuario</th>
        <th scope="col">Email</th>
        <th scope="col">Edad</th>
        <th scope="col">Contraseña</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody v-for="user in USERS" :key="user.id">
      <tr>
        <th scope="row">{{ user.id }}</th>
        <td><input type="text" v-model="user.firstName" /></td>
        <td><input type="text" v-model="user.lastName" /></td>
        <td><input type="text" v-model="user.username" /></td>
        <td><input type="email" v-model="user.email" /></td>
        <td><input type="number" v-model="user.edad" /></td>
        <td><input type="password" v-model="user.password" /></td>
        <td>
          <button @click="editUser(user)" class="btn btn-warning">Editar</button>
          <button @click="deleteUser(user.id)" class="btn btn-danger ms-1">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
