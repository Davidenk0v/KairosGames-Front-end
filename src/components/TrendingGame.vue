<script setup>
const props = defineProps(['trending'])
const trending = props.trending;

</script>

<template>
    <img :src="trending.urlImg" alt="Trend Image">
</template>
