<script setup>
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref, defineAsyncComponent } from 'vue'
import router from '@/router'

const route = useRoute()

const DangerAlert = defineAsyncComponent(() => import('@/components/DangerAlert.vue'))
const SuccessAlert = defineAsyncComponent(() => import('@/components/SuccessAlert.vue'))

const ALERT = ref(SuccessAlert)
const MESSAGE = ref('')
const PASSWORD = ref('')
const PASSWORD2 = ref('')
const ID_USER = ref(route.params.id)

const sendNewPassword = async () => {
  if (PASSWORD.value === PASSWORD2.value && PASSWORD.value != '') {
    try {
      const response = await axios.post(
        'http://localhost:8080/password/set-newpassword/' + ID_USER.value,
        PASSWORD.value
      )
      router.push('/newpassword/sended')
    } catch (error) {
      console.log(error.respose.data)
      ALERT.value = DangerAlert
      MESSAGE.value = error.response.data
    }
  } else {
    ALERT.value = DangerAlert
    MESSAGE.value = 'Debes rellenar ambos campos y las contraseñas deben coincidir'
  }
}
</script>
<template>
  <NavBarNoSearch>Restablecer contraseña</NavBarNoSearch>
  <div class="col m-5">
    <component v-if="MESSAGE != ''" :is="ALERT">{{ MESSAGE }}</component>
    <h5>Reestablezca su contraseña</h5>
    <div class="form-floating mb-5">
      <input
        type="password"
        class="form-control"
        id="passwordInput"
        placeholder="name@example.com"
        v-model="PASSWORD"
      />
      <label for="floatingInput">Introduce la nueva contraseña</label>
    </div>
    <div class="form-floating mb-5">
      <input
        type="password"
        class="form-control"
        id="passwordInput2"
        placeholder="name@example.com"
        v-model="PASSWORD2"
      />
      <label for="passwordInput2">Vuelve a introducir la nueva contraseña</label>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="sendNewPassword()" class="btn btn-outline-primary">Cambiar contraseña</button>
    </div>
  </div>
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
