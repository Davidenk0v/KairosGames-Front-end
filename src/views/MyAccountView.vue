<script setup>
import NavBarNoSeacrh from '@/components/NavBarNoSearch.vue'

import { ref, defineAsyncComponent } from 'vue'

const UserInfo = defineAsyncComponent(() => import('@/components/Layout/UserInfo.vue'))
const MyGames = defineAsyncComponent(() => import('@/components/Layout/MyGames.vue'))
const layout = ref(MyGames)

const handleLayout = (cmp) => (layout.value = cmp)
</script>
<template>
  <headers>
    <NavBarNoSeacrh>My Account</NavBarNoSeacrh>
  </headers>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <button @click="handleLayout(MyGames)" class="nav-link active" aria-current="page">
        Mis juegos
      </button>
    </li>
    <li class="nav-item">
      <button @click="handleLayout(UserInfo)" class="nav-link">Mis datos</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</button>
    </li>
  </ul>

  <component :is="layout" />
</template>
