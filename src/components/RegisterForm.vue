<script setup>
import axios from 'axios'
import { ref } from 'vue'
import router from '@/router'
import { jwtDecode } from 'jwt-decode'
import DangerAlert from '@/components/DangerAlert.vue'

const USERNAME = ref('')
const PASSWORD = ref('')
const CONFIRMPASSWORD = ref('')
const NAME = ref('')
const LASTNAME = ref('')
const EMAIL = ref('')
const AGE = ref('')

const generPreference = ref([])
const franquiciaFavorita = ref('')
const dispositivoPreferido = ref([])
const motivacionJugar = ref([])
const narrativaPreferida = ref([])
const experiencia = ref([])
const juegoEsperado = ref('')
const tipoMundo = ref([])
const juegoFavorito = ref([])

const MESSAGE = ref('')

const URL_REGISTER = 'http://localhost:8080/auth/register'
const URL_PREFERENCES = 'http://localhost:8080/api/preferences/add/'
const URL_REGISTER = 'http://localhost:8080/auth/register'
const URL_PREFERENCES = 'http://localhost:8080/api/preferences/add/'

function confirmItsTheSamePassword() {
  return PASSWORD.value === CONFIRMPASSWORD.value
}
function confirmItsTheSamePassword() {
  return PASSWORD.value === CONFIRMPASSWORD.value
}

const register = () => {
  if (confirmItsTheSamePassword()) {
    const QUESTIONS = [
      { genero: generPreference.value },
      { franquicia: franquiciaFavorita.value },
      { dispositivo: dispositivoPreferido.value },
      { motivacion: motivacionJugar.value },
      { narrativa: narrativaPreferida.value },
      { experiencia: experiencia.value },
      { juegoEsperado: juegoEsperado.value },
      { tipoMundo: tipoMundo.value },
      { juegoFavorito: juegoFavorito.value }
    ]

    const data = {
      username: USERNAME.value,
      password: PASSWORD.value,
      firstName: NAME.value,
      lastName: LASTNAME.value,
      email: EMAIL.value,
      edad: AGE.value
    }

    axios
    axios
      .post(URL_REGISTER, data)
      .then((response) => {
        if (response.status === 200) {
          MESSAGE.value = 'Registro exitoso'
          // const userId = recoger id y pasarlo a la funcion
          sessionStorage.setItem('token', response.data.token)
          router.push('/')
        } else {
          MESSAGE.value = 'Error al crear la cuenta'
        }
      })
      .catch((error) => {
        MESSAGE.value = 'Usuario ya existente'
      })
  } else {
    router.push('/register')
    MESSAGE.value = 'Las contraseñas deben coincidir en ambos campos'
  }
}

function sendPreferences(userId) {
  const QUESTIONS = [
    {
      1: generPreference.value,
      2: franquiciaFavorita.value,
      3: dispositivoPreferido.value,
      4: motivacionJugar.value,
      5: narrativaPreferida.value,
      6: experiencia.value,
      7: juegoEsperado.value,
      8: tipoMundo.value,
      9: juegoFavorito.value
    }
  ]
  axios
    .post(URL_PREFERENCES + userId, QUESTIONS)
    .then((response) => {
      if (response.status === 200) {
        MESSAGE.value = 'Registro exitoso'
        console.log('listo calisto')
      } else {
        console.log('fallo algo manita')
      }
    })
    .catch((error) => {
      console.error('Error en', error)
    })
}
function sendPreferences(userId) {
  const QUESTIONS = [
    {
      1: generPreference.value,
      2: franquiciaFavorita.value,
      3: dispositivoPreferido.value,
      4: motivacionJugar.value,
      5: narrativaPreferida.value,
      6: experiencia.value,
      7: juegoEsperado.value,
      8: tipoMundo.value,
      9: juegoFavorito.value
    }
  ]
  axios
    .post(URL_PREFERENCES + userId, QUESTIONS)
    .then((response) => {
      if (response.status === 200) {
        MESSAGE.value = 'Registro exitoso'
        console.log('listo calisto')
      } else {
        console.log('fallo algo manita')
      }
    })
    .catch((error) => {
      console.error('Error en', error)
    })
}
</script>
<template>
  <div class="container-fluid">
    <div style="width: 50%; margin-left: 25%">
      <DangerAlert v-if="MESSAGE"> {{ MESSAGE }}</DangerAlert>
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
        </div>
        <br />
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
    <div style="width: 80%; margin-left: 10%">
      <!-- SEXTO GRUPO -->
      <div class="col-md-8 mx-auto text-center">
        <div class="input-group" style="margin-top: 20px">
          <div class="questionForm">
            <form>
              <div style="border: 1px solid grey; padding: 20px">
                <h5 style="margin-bottom: 30px; text-align: center; margin-top: 20px">
                  Formulario de Preferencias de Videojuegos
                </h5>
                <div class="form-group">
                  <label class="title">1. ¿Cuáles son tus géneros de videojuegos favoritos?</label>
                  <p style="font-size: small"><i>Selección múltiple (Control + Clic)</i></p>
                  <select class="form-control" v-model="generPreference" multiple>
                    <option value="Aventura">Aventura</option>
                    <option value="Acción">Acción</option>
                    <option value="Rol">Rol</option>
                    <option value="Terror">Terror</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Estrategia">Estrategia</option>
                    <option value="Arcade">Arcade</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title">2. ¿Tienes alguna franquicia de videojuegos favorita?</label>
                  <input
                    type="text"
                    v-model="franquiciaFavorita"
                    class="form-control"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <div class="form-group">
                  <label class="title"
                    >3. ¿Prefieres jugar en consolas de sobremesa, PC o dispositivos móviles?</label
                  >
                  <p style="font-size: small"><i>Selección múltiple (Control + Clic)</i></p>
                  <select class="form-control" v-model="dispositivoPreferido" multiple>
                    <option value="Consola de sobremesa">Consola de sobremesa</option>
                    <option value="PC">PC</option>
                    <option value="Dispositivos móviles">Dispositivos móviles</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title">4. ¿Qué te motiva a jugar un videojuego?</label>
                  <p style="font-size: small"><i>Selección múltiple (Control + Clic)</i></p>
                  <select class="form-control" v-model="motivacionJugar" multiple>
                    <option value="Historia">Historia</option>
                    <option value="Jugabilidad">Jugabilidad</option>
                    <option value="Gráficos">Gráficos</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title">5. ¿Qué tipo de narrativa prefieres en un juego?</label>
                  <select class="form-control" v-model="narrativaPreferida" multiple>
                    <option value="Profunda y compleja">Profunda y compleja</option>
                    <option value="Ligera y divertida">Ligera y divertida</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title"
                    >6. ¿Cuál es tu nivel de experiencia en los videojuegos?</label
                  >
                  <select class="form-control" v-model="experiencia" multiple>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title"
                    >7. ¿Hay algún juego que estés esperando con ansias que se lance
                    próximamente?</label
                  >
                  <input
                    type="text"
                    v-model="juegoEsperado"
                    class="form-control"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <div class="form-group">
                  <label class="title"
                    >8. ¿Prefieres juegos de mundo abierto o juegos lineales con una estructura más
                    definida?</label
                  >
                  <select class="form-control" v-model="tipoMundo" multiple>
                    <option value="Mundo abierto">Mundo abierto</option>
                    <option value="Lineales">Lineales</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="title">9. ¿Cuál es tu videojuego favorito?</label>
                  <input
                    type="text"
                    v-model="juegoFavorito"
                    class="form-control"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button type="submit" @click="register()" class="btn btn-primary">Register</button>
    </div>
  </div>
</template>

<style>
.questionForm {
  width: 100%;
  background-color: rgb(236, 236, 236);
}
button {
  margin-left: 47%;
  margin-bottom: 20px;
  margin-top: 15px;
}
.title {
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 18px;
}
</style>
