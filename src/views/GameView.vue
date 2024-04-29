<script setup>
import { ref, onMounted, defineProps, computed } from 'vue'
import axios from 'axios'
import FooterPage from '@/components/FooterPage.vue'
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
import { jwtDecode } from 'jwt-decode'
import { useAxiosStore } from '@/stores/useAxiosStore'

const axiosStore = useAxiosStore()
const GAME = ref([])
const GAMESPLATFORM = ref([])
const TOKEN = ref(sessionStorage.getItem('token'))
const USER_GAMES = ref([])
const config = {
  headers: {
    Authorization: `Bearer ${TOKEN.value}`
  }
}
let higher

const props = defineProps(['name'])
const name = props.name

const colorMap = {
  InstaGaming: '#fbab49',
  Eneba: '#b06780'
}

const getColorForPlatform = (platform) => {
  return colorMap[platform] || '#fbab49'
}

const gethigherPriced = (price) => {
  if (GAMESPLATFORM.value.length > 1) {
    GAMESPLATFORM.value.forEach((game) => {
      if (game.higherPrice > price) {
        higher = game.lowerPrice
      }
    })
  } else {
    higher = price
  }
  return higher
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

const addGameToFav = async (idGame) => {
  axios
    .get(axiosStore.URL_API + `/user/games/add/${getUserId.value}/${idGame}`, config)
    .then((response) => {
      console.log(response)
      checkListFav()
    })
    .catch((error) => {
      console.error(error)
    })
}

const deleteGameToFav = async (idGame) => {
  axios
    .delete(axiosStore.URL_API + `/user/games/${getUserId.value}/${idGame}`, config)
    .then((response) => {
      console.log(response)
      checkListFav()
    })
    .catch((error) => {
      console.error(error)
    })
}

const checkListFav = async () => {
  axios.get(axiosStore.URL_API + `/user/games/${getUserId.value}`, config).then((response) => {
    USER_GAMES.value = response.data
  })
}

const isGameFavorite = (idGame) => {
  if (USER_GAMES.value.length > 0) {
    for (let i = 0; i < USER_GAMES.value.length; i++) {
      if (USER_GAMES.value[i].id === idGame) {
        return true
      }
    }
  }
  return false
}

const getGame = () => {
  axios.get('http://localhost:8080/api/games/filter/' + name).then((response) => {
    response.data.length > 1 ? (GAME.value = response.data[1]) : (GAME.value = response.data[0])
    GAMESPLATFORM.value = response.data
  })
}

const isAuthenticated = computed(() => {
  const token = sessionStorage.getItem('token')
  if (token) {
    try {
      //Descodificamos el token para saber si el usuario es admin o user
      const { authorities } = jwtDecode(token)
      if (authorities === 'ROLE_ADMIN' || authorities === 'ROLE_USER') {
        return true
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
  return false
})

onMounted(() => {
  getGame()
})
</script>

<template>
  <NavBarNoSearch>{{ GAME.name }}</NavBarNoSearch>

  <div class="container-fluid">
    <div class="row">
      <div
        class="col-2 bg-light position-fixed top-0 start-0"
        style="height: auto; text-align: center; margin-top: 100px"
      >
        <!-- Contenedor izquierda superpuesto -->
        <img
          src="../../public/publicidad/publi1.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
        />
        <img
          src="../../public/publicidad/publi2.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi10.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi7.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
      </div>

      <div class="col bg-light"></div>
      <!-- Contenedor central -->

      <div
        class="col-2 bg-light position-fixed top-0 end-0"
        style="height: auto; text-align: center; margin-top: 100px"
      >
        <!-- Contenedor derecha superpuesto -->
        <img
          src="../../public/publicidad/publi11.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
        />
        <img
          src="../../public/publicidad/publi16.jpeg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi14.png"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi8.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
        <img
          src="../../public/publicidad/publi15.jpg"
          alt="KairósGames Logo"
          style="width: 100%; height: 100%; margin-bottom: 5px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-2 bg-light"></div>
      <!-- Contenedor izquierda -->
      <div class="col bg-light">
        <!-- Contenedor central superpuesto -->
        <div class="container">
          <div class="left">
            <div class="card" id="cardRotate" style="width: 20rem; height: auto; margin-top: 5rem">
              <img :src="GAME.urlImg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-text" style="text-align: center">{{ GAME.name }}</h4>
              </div>
            </div>
            <!-- Botones de favoritos -->
            <div v-if="isAuthenticated" class="text-center">
              <button class="btn" v-if="isGameFavorite(GAME.id)" @click="deleteGameToFav(GAME.id)">
                <svg
                  width="44px"
                  height="44px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4.8824 12.9557L10.5021 19.3071C11.2981 20.2067 12.7019 20.2067 13.4979 19.3071L19.1176 12.9557C20.7905 11.0649 21.6596 8.6871 20.4027 6.41967C18.9505 3.79992 16.2895 3.26448 13.9771 5.02375C13.182 5.62861 12.5294 6.31934 12.2107 6.67771C12.1 6.80224 11.9 6.80224 11.7893 6.67771C11.4706 6.31934 10.818 5.62861 10.0229 5.02375C7.71053 3.26448 5.04945 3.79992 3.59728 6.41967C2.3404 8.6871 3.20947 11.0649 4.8824 12.9557Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12 7L11.3093 9.07203C11.1142 9.65754 11.2002 10.3004 11.5426 10.8139L12.2604 11.8906C12.7083 12.5624 12.7083 13.4376 12.2604 14.1094L11.513 15.2305C11.1876 15.7186 11.0929 16.3251 11.2541 16.8893L12 19.5"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                Quitar de favoritos
              </button>
              <button class="btn" v-if="!isGameFavorite(GAME.id)" @click="addGameToFav(GAME.id)">
                <svg
                  width="44px"
                  height="44px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#ff0000"
                    ></path>
                  </g>
                </svg>
                Añadir a favoritos
              </button>
            </div>
          </div>
          <div class="right">
            <div class="card" style="width: 30rem">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div>Shop:</div>
                  <div style="display: flex">
                    <div
                      v-for="(gameShop, index) in GAMESPLATFORM"
                      :key="index"
                      class="platform"
                      :style="{ backgroundColor: getColorForPlatform(gameShop.shop) }"
                    >
                      <a :href="gameShop.urlPage" target="_blank"
                        ><div>{{ gameShop.shop }}</div></a
                      >
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div>
                    Platform:
                    <div
                      v-for="(gamePlatform, index) in GAMESPLATFORM"
                      :key="index"
                      style="margin-top: 5px; display: flex"
                    >
                      <div style="margin-left: 5px">{{ gamePlatform.platform }}</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div>
                    Precio actual:
                    <div
                      v-for="(game, index) in GAMESPLATFORM"
                      :key="index"
                      style="margin-top: 5px; display: flex"
                    >
                      <div
                        class="circle"
                        :style="{ backgroundColor: getColorForPlatform(game.shop) }"
                      ></div>
                      <div class="price">{{ game.actualPrice }} €</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div>
                    Precio más alto que ha tenido:
                    <div style="margin-top: 5px">{{ gethigherPriced(GAME.higherPrice) }} €</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 bg-light"></div>
      <!-- Contenedor derecha -->
    </div>

    <div class="row">
      <div class="d-flex justify-content-center">
        <FooterPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow: auto;
  height: 100%;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-left: 2rem;
  margin-top: 5rem;
}

li {
  height: auto;
  padding-bottom: 15px;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

#cardRotate {
  animation: rotate 0.9s linear 0.2s 1;
}

.platform {
  border-radius: 10px;
  width: auto;
  padding: 2px 5px;
  margin-top: 5px;
  margin-right: 10px;
  text-align: center;
}
.platform a {
  text-decoration: none;
  color: white;
}
.circle {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 10px;
  margin-top: 8.5px;
}
.price {
  margin-right: 10px;
}
</style>
