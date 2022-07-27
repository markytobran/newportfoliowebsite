<script setup>
const props = defineProps({
  title: String,
  techList: Array,
})
</script>

<template>
  <h3 class="text-white font-bold text-2xl mb-3">{{ title }}</h3>
  <span
    v-for="tech in techList"
    :key="tech"
    class="font-bold inline-block text-xl rounded-lg px-3 py-1 bg-primary-pink mr-3 mt-3"
    style="color: #1d1d1d"
    >{{ tech }}</span
  >
</template>
