<script setup>
import NavBarNoSeacrh from '@/components/NavBarNoSearch.vue'

import { ref, defineAsyncComponent } from 'vue'

const UserInfo = defineAsyncComponent(() => import('@/components/Layout/UserInfo.vue'))
const MyGames = defineAsyncComponent(() => import('@/components/Layout/MyGames.vue'))
const layout = ref(MyGames)
const games = ref('nav-link active')
const user = ref('nav-link')

const handleLayout = (cmp) => {
  layout.value = cmp
  games.value = cmp === MyGames ? 'nav-link active' : 'nav-link'
  user.value = cmp === UserInfo ? 'nav-link active' : 'nav-link'
}
</script>
<template>
  <headers>
    <NavBarNoSeacrh>My Account</NavBarNoSeacrh>
  </headers>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <button @click="handleLayout(MyGames)" :class="games" aria-current="page">Mis juegos</button>
    </li>
    <li class="nav-item">
      <button @click="handleLayout(UserInfo)" :class="user" class="nav-link">Mis datos</button>
    </li>
  </ul>

  <component :is="layout" />
</template>
