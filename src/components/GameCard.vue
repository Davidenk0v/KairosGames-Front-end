<script setup>
const props = defineProps(['game'])
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="props.game.urlImg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="{{props.game.name}}">Card title</h5>
      <p class="card-text">
        {{ props.game.platform }}
      </p>
      <a :href="props.game.urlPage" class="btn btn-primary">Ir a la tienda</a>
    </div>
  </div>
</template>
