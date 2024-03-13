<script setup>
const props = defineProps(['game'])
console.log(props.game)
console.log('Llega aqui')
</script>

<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg">
    <img class="w-full" src="#" alt="Imagen" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-900">Título del producto</div>
      <p class="text-gray-700 text-base">$99.99</p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Comprar
      </button>
    </div>
  </div>
</template>
