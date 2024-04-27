<script setup>

  import QuestionsForm from '@/components/QuestionsForm.vue'
  import axios from 'axios'
  import { ref } from 'vue'
  import router from '@/router'

  const USERNAME = ref('')
  const PASSWORD = ref('')
  const CONFIRMPASSWORD = ref('')
  const NAME = ref('')
  const LASTNAME = ref('')
  const EMAIL = ref('')
  const AGE = ref('')

  const QUESTIONS = ref('')
  const userId = 1
  const MESSAGE = ref('')

  const URL_REGISTER = 'http://localhost:8080/auth/register'

  function confirmItsTheSamePassword(){
    return PASSWORD.value === CONFIRMPASSWORD.value
  }


  const register = () =>{
    if(confirmItsTheSamePassword()){
      const data = {
        username: USERNAME.value,
        password: PASSWORD.value,
        firstName: NAME.value,
        lastName: LASTNAME.value,
        email: EMAIL.value,
        edad: AGE.value,
      }

      axios
      .post(URL_REGISTER, data)
      .then((response) => {
        if (response.status === 200) {
          MESSAGE.value = 'Registro exitoso'
          // const userId = response.data.userId
          sendPreferences(userId)
        } else {
          router.push('/register')
          MESSAGE.value = 'Error al crear la cuenta'
        }
      })
      .catch((error) => {
        console.error('Error en', error)
      })

    }else{
      router.push('/register')
      MESSAGE.value = 'Las contraseñas deben coincidir en ambos campos'
      console.log('jdhnd')
    }
  }

  function sendPreferences(){
    QUESTIONS.value = {
      's':'s'
    }
    console.log(QUESTIONS)
  }
</script>
<template>
  <div class="container-fluid">
      <div style="width: 50%; margin-left: 25%;">
        <!-- USERNAME -->
        <div class="mb-4 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Nombre de usuario</label>
          <div class="input-group">
            <span class="input-group-text" id="username" name="username">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="USERNAME"
            />
          </div>
        </div>
        <!-- NOMBRE -->
        <div class="mb-3 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Nombre</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              aria-label="Recipient's name"
              aria-describedby="basic-addon2"
              v-model="NAME"
            />
          </div>
        </div>
        <!-- APELLIDOS -->
        <div class="mb-3 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Apellidos</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              aria-label="Recipient's last name"
              aria-describedby="basic-addon2"
              v-model="LASTNAME"
            />
          </div>
        </div>
        <!-- EMAIL -->
        <div class="mb-3 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Email</label>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="ejemplo@mail.es"
              aria-label="Recipient's email"
              aria-describedby="basic-addon2"
              v-model="EMAIL"
            />
          </div>
        </div>
        <!-- EDAD -->
        <div class="mb-3 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Edad</label>
          <div class="input-group">
            <input
              type="number"
              min="18"
              max="99"
              class="form-control"
              aria-label="Recipient's edad"
              aria-describedby="basic-addon2"
              v-model="AGE"
            />
          </div>
        </div>
        <!-- PASSWORD -->
        <div class="mb-3 col-md-8 mx-auto text-left">
          <label for="basic-url" class="form-label">Contraseña</label>
          <div class="input-group col-md-8 mx-auto text-center">
            <input
              type="password"
              class="form-control"
              id="password"
              aria-describedby="basic-addon3 basic-addon4"
              v-model="PASSWORD"
            />
          </div><br>
          <!--CONFIRMAR PASSWORD-->
          <label for="basic-url" class="form-label">Confirma tu contraseña</label>
          <div class="input-group col-md-8 mx-auto text-center">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              aria-describedby="basic-addon3 basic-addon4"
              v-model="CONFIRMPASSWORD"
            />
          </div>
          <div class="form-text col-md-8 mx-auto text-center" id="basic-addon4">
            <small>Asegurate de que eliges una contraseña segura</small>
          </div>
        </div>
      </div>
      <div style="width: 80%; margin-left: 10%;">
        <!-- SEXTO GRUPO -->
        <div class="col-md-8 mx-auto text-center">
          <div class="input-group" style=" margin-top: 20px;">
            <div class="questionForm" ><QuestionsForm/></div>
          </div>
        </div>
        <button type="submit" @click="register()" class="btn btn-primary">Register</button>
      </div>
  </div>
</template>

<style>
  .questionForm{
    width: 100%;
  }
  button{
    margin-left: 47%;
    margin-bottom: 20px;
    margin-top: 15px;
  }
</style>