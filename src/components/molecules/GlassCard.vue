<script setup>
const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="glass pt-8 pb-20 px-5 bg-dark-grey rounded-xl">
    <h1 class="text-cyan-blue font-extrabold mb-5" v-if="props.title">
      {{ props.title }}
    </h1>
    <slot></slot>
  </div>
</template>
