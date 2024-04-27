<script setup>
import NavBarNoSeacrh from '@/components/NavBarNoSearch.vue'

import { ref, defineAsyncComponent } from 'vue'

const UsersList = defineAsyncComponent(() => import('@/components/Layout/UsersList.vue'))
const Dashboard = defineAsyncComponent(() => import('@/components/Layout/DashboardView.vue'))
const layout = ref(Dashboard)
const games = ref('nav-link active')
const user = ref('nav-link')

const handleLayout = (cmp) => {
  layout.value = cmp
  games.value = cmp === Dashboard ? 'nav-link active' : 'nav-link'
  user.value = cmp === UsersList ? 'nav-link active' : 'nav-link'
}
</script>
<template>
  <headers>
    <NavBarNoSeacrh>Dashboard</NavBarNoSeacrh>
  </headers>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <button @click="handleLayout(Dashboard)" :class="games" aria-current="page">Dashboard</button>
    </li>
    <li class="nav-item">
      <button @click="handleLayout(UsersList)" :class="user" class="nav-link">Usuarios</button>
    </li>
  </ul>

  <component :is="layout" />
</template>
