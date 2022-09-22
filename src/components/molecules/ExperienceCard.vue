<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  company: String,
  job: String,
  date: String,
  description: String,
  moreDescription: String,
  jobList: String,
  techs: String,
})

const showDescription = ref(false)
const rotateValue = computed(() => (showDescription.value ? 'rotate-90 ' : 'rotate-0'))

const toggleDescription = () => {
  showDescription.value = !showDescription.value
}
</script>

<template>
  <div
    class="bg-dark-grey text-white h-fit relative rounded-xl pt-3 pb-10 px-3 shadow-md shadow-primary-pink transition-all duration-150 ease-in-out cursor-pointer hover:-translate-y-3.5 hover:shadow-xl mb-20 hover:shadow-primary-pink experience-card"
  >
    <div class="h-20">
      <slot />
    </div>

    <h4 class="font-bold text-xl mb-3 mt-8">
      {{ company }}
    </h4>

    <span class="text-lg block">{{ job }}</span>
    <span class="font-bold inline-block text-lg rounded-lg px-3 py-1 bg-primary-pink mr-3 mt-3 text-dark-grey">{{ date }}</span>
    <p class="text-sm mt-3">
      {{ description }}
    </p>
    <button class="font-sm mt-5 block underline decoration-cyan-blue decoration-4 pb-3 cursor-pointer" @click="toggleDescription">
      Read more <span class="inline-block" :class="rotateValue">></span>
    </button>
    <transition name="description">
      <div v-if="showDescription">
        <p class="text-white text-sm mb-3">
          {{ moreDescription }}
        </p>
        <ul class="text-white text-sm pl-7 pr-2">
          <li class="mb-2 relative" v-for="list in jobList" :key="list">
            {{ list }}
          </li>
        </ul>
        <p>
          <span class="font-bold inline-block text-lg text-dark-grey rounded-lg px-3 py-1 bg-primary-pink mr-3 mt-3 mb-3"> Technologies: </span>
          <br />
          <span v-for="tech in techs" :key="tech" class="border border-2 rounded-md border-dark-cyan-blue px-1 inline-block mr-2 mt-2 text-white">
            {{ tech }}
          </span>
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
li::before {
  content: '🚀  ';
  position: absolute;
  top: 8px;
  left: -30px;
  font-size: 1.1rem;
}

.description-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}

.description-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 0.5s;
}

.description-leave-to {
  opacity: 0;
  transform: translateY(0%);
}

.description-leave-active {
  transition: all 1s ease-out;
}
</style>
