<script setup>
const props = defineProps(['current_page', 'total_pages'])
const emit = defineEmits(['next_page', 'previus_page', 'set_current'])
</script>

<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li v-if="!props.current_page == 0" class="page-item">
        <a @click="emit('previus_page')" class="page-link" href="#" tabindex="-1"> Atrás </a>
      </li>
      <li v-if="!props.current_page == 0" class="page-item">
        <a @click="emit('set_current', 0)" class="page-link">1</a>
      </li>
      <li class="page-item active">
        <a id="currentPage" class="page-link">
          {{ props.current_page + 1 }} <span class="sr-only"></span>
        </a>
      </li>
      <li v-if="props.current_page != props.total_pages" class="page-item">
        <a @click="emit('set_current', props.total_pages)" class="page-link">
          {{ props.total_pages + 1 }}
        </a>
      </li>
      <li v-if="props.current_page != props.total_pages" class="page-item">
        <a @click="emit('next_page')" class="page-link" href="#">Siguiente</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav{
    margin-top: 15px;
  }
</style>
