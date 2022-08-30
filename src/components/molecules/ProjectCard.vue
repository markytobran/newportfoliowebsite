<script setup>
import { computed, ref } from 'vue'
import Github from '../icons/Github.vue'
import ExternalLink from '../icons/ExternalLink.vue'

const props = defineProps({
  project: Object,
})

const rotate = ref(false)

const projectType = computed(() =>
  props.project.type === 'front-end'
    ? 'border-primary-pink'
    : props.project.type === 'back-end'
    ? 'border-cyan-blue'
    : props.project.type === 'full-stack'
    ? 'border-gradient-pink-cyan'
    : ''
)

function getImageUrl(folder, name) {
  return new URL(`../../assets/${folder}/${name}.png`, import.meta.url).href
}

function flip() {
  rotate.value = !rotate.value
}
</script>

<template>
  <div class="project-card select-none" @touchstart="flip" @touchend="flip" :class="{ flip: rotate }">
    <!--FrontSide of the card-->
    <div class="project-card-side project-card-front" :class="projectType">
      <figure class="flex justify-center items-center relative h-1/2 mb-2">
        <img :src="getImageUrl('projects', project.coverPhoto)" :alt="project.name" />
        <figcaption>{{ project.name }}</figcaption>
      </figure>
      <div class="card__side--details px-4">
        <p class="card__side--details-best text-white mb-3 font-light text-sm">
          {{ project.description }}
        </p>
        <span class="text-white underline decoration-cyan-blue decoration-4 underline-offset-2 font-bold text-sm"> Technologies: </span>
        <ul class="flex mt-1">
          <li class="mr-1" v-for="tech in project.techs">
            <img :src="getImageUrl('technology-icons', tech.name)" :class="tech.classes" />
          </li>
        </ul>
      </div>
      <span class="absolute bottom-2 right-5 text-white flex ml-3">
        Links to the project:
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f24b67" class="ml-3 move-right">
          <path d="M24 12l-9-8v6h-15v4h15v6z" />
        </svg>
      </span>
    </div>
    <!--BackSide of the card-->
    <div class="project-card-side project-card-back" :class="projectType">
      <img src="../../assets/M.png" class="h-9" />
      <h5 class="text-white ml-1 text-md">Mark</h5>
      <span class="capitalize text-white mt-5 font-extrabold"> {{ project.type }} project </span>
      <img src="../../assets/rocket.jpg" class="h-16 mt-3" />

      <!--Links-->
      <div class="flex mt-4">
        <a :href="project.gitHubLink" target="_blank" class="mr-4 cursor-pointer flex flex-col justify-center items-center">
          <Github />
          <span class="text-white mt-1">Github</span>
        </a>
        <a :href="project.websiteLink" class="mr-4 cursor-pointer flex flex-col justify-center items-center">
          <ExternalLink />
          <span class="text-white mt-1">Website</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  @apply h-96 w-80 mb-10 cursor-pointer relative;
  perspective: 150rem;
}
.project-card-side {
  @apply absolute top-0 left-0 w-full h-full border-4;
  backface-visibility: hidden;
  transition: all 2s ease;
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
}
.project-card-front figure {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}
.project-card-front figure:after {
  @apply top-0 left-0 w-full h-full absolute bg-black;
  content: '';
  background-color: rgba(0, 0, 0, 0.3);
}
.project-card-front figure figcaption {
  @apply absolute bottom-10 right-0 text-white bg-black font-extrabold uppercase text-base z-50 px-3 py-2;
  box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
  text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
}
.project-card-back {
  @apply bg-black flex flex-col w-full justify-center items-center;
  transform: rotateY(180deg);
}
.project-card:hover .project-card-front,
.flip .project-card-front {
  transform: rotateY(180deg);
}
.project-card:hover .project-card-back,
.flip .project-card-back {
  transform: rotateY(0);
}
.move-right {
  animation: moveRight 1s linear infinite;
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
