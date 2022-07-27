<script setup>
const props = defineProps({
  company: String,
  job: String,
  date: String,
  description: String,
  url: String,
})
</script>

<template>
  <div class="bg-dark-grey rounded-xl p-3">
    <slot />

    <h4 class="text-white font-bold text-xl mb-3 mt-8">
      {{ company }}
    </h4>
    <span class="text-white text-lg block">{{ job }}</span>
    <span
      class="font-bold inline-block text-lg rounded-lg px-3 py-1 bg-primary-pink mr-3 mt-3"
      >{{ date }}</span
    >
    <p class="text-white text-sm mt-3">
      {{ description }}
    </p>
    <a
      class="text-white font-sm mt-5 block underline decoration-cyan-blue decoration-4 pb-3 cursor-pointer"
      :href="url"
      >Read more ></a
    >
  </div>
</template>
