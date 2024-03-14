<script setup>
const props = defineProps(['trending'])
const trending = props.trending;
</script>

<template>

<p>{{trending.name}}</p>
</template>