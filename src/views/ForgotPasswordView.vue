<script setup>
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref } from 'vue'
import axios from 'axios'

import { useAxiosStore } from '@/stores/useAxiosStore'
import DangerAlert from '@/components/DangerAlert.vue'

const axiosStore = useAxiosStore()

const EMAIL = ref('')
const MESSAGE = ref('')

const sendMail = async () => {
  try {
    const response = await axios.post('http://localhost:8080/password/link/' + EMAIL.value)
    console.log(response)
  } catch (error) {
    console.error('Error al enviar el email: ' + error)
  }
}
</script>
<template>
  <NavBarNoSearch>Recuperar contraseña</NavBarNoSearch>
  <div class="col m-5">
    <DangerAlert v-if="MESSAGE != ''">{{ MESSAGE }}</DangerAlert>
    <h5>Introduce el email registrado a tu cuenta</h5>
    <div class="form-floating mb-5">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="EMAIL"
      />
      <label for="floatingInput">Dirección de email</label>
      <small>Se te enviará un correo electrónico con un enlace para cambiar tu contraseña</small>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="sendMail()" class="btn btn-outline-primary">Enviar enlace</button>
    </div>
  </div>
  <FooterComponent id="footer" />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
