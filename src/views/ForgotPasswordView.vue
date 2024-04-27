<script setup>
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, defineAsyncComponent } from 'vue'
import axios from 'axios'

const DangerAlert = defineAsyncComponent(() => import('@/components/DangerAlert.vue'))
const SuccessAlert = defineAsyncComponent(() => import('@/components/SuccessAlert.vue'))

const ALERT = ref(SuccessAlert)
const EMAIL = ref('')
const MESSAGE = ref('')

const sendMail = async () => {
  try {
    const response = await axios.post('http://localhost:8080/password/link/' + EMAIL.value)
    if (response.status === 200) {
      ALERT.value = SuccessAlert
      MESSAGE.value = 'Enlace enviado a su cuenta de correo'
    }
  } catch (error) {
    ALERT.value = DangerAlert
    MESSAGE.value = error.response.data
  }
}
</script>
<template>
  <NavBarNoSearch>Recuperar contraseña</NavBarNoSearch>
  <div class="col m-5">
    <component v-if="MESSAGE != ''" :is="ALERT">{{ MESSAGE }}</component>
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
