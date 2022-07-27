<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import gsap from 'gsap'
import Github from './components/icons/Github.vue'
import Linkedin from './components/icons/Linkedin.vue'
import Header from './components/molecules/Header.vue'
import Loader from './components/molecules/Loader.vue'

const router = useRouter()
const route = useRoute()

let isLoading = ref(false)
let isAlertBoxOpen = ref(false)

const path = computed(() => route.path)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  setTimeout(() => (isLoading.value = false), 2000)
  next()
})

const beforeEnter = (el) => {
  el.style.transform = 'translateX(800px)'
  el.style.right = Math.random() * 500 + 'px'
  el.style.top = Math.random() * window.innerHeight + 'px'
  el.style.width = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
  el.style.height = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
}

const enter = (el, done) => {
  gsap.to(el, {
    x: -2000,
    duration: 12,
    onComplete: done,
    delay: 0.2 * Math.random() * 200,
    repeat: -1,
  })
}

function closeAlertBox() {
  isAlertBoxOpen.value = false
}

onMounted(() => {
  setTimeout(() => (isAlertBoxOpen.value = true), 2000)
})
</script>

<template>
  <Header />
  <main class="bg-light-grey overflow-x-hidden relative" :class="path === '/' ? 'overflow-y-hidden' : ''">
    <div
      class="w-1/3 absolute left-1/2 h-20 bg-red-400 -translate-x-1/2 -translate-y-20 z-50 rounded-xl flex flex-col items-center justify-center delay-500 cursor-pointer transition-all duration-900 ease-in-out"
      :class="isAlertBoxOpen ? 'translate-y-0' : ''"
      @click="closeAlertBox"
    >
      <span class="absolute top-0 right-3">X</span>
      <p class="text-black font-extrabold text-center">Please bear in mind. The website is still under construction.</p>
      <div class="flex gap-2">
        <img src="./assets/under-construction.png" alt="Under construction" width="28" height="28" />
        <img src="./assets/under-construction2.png" alt="Under construction" width="28" height="28" />
        <img src="./assets/under-construction3.png" alt="Under construction" width="28" height="28" />
      </div>
    </div>

    <!--Star animation-->
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <span v-for="star in 100" :key="star" class="absolute right-0 bg-white z-0" :data-index="star"> </span>
    </transition-group>

    <!--Loader animation-->
    <transition name="loader">
      <Loader v-if="isLoading" />
    </transition>

    <!--Router-->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" class="p-10"></component>
      </transition>
    </router-view>
  </main>
</template>

<style>
/* Custom scrollbar*/
::-webkit-scrollbar {
  width: 14px;
}
::-webkit-scrollbar-track {
  border: 7px solid black;
  box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb {
  background: #08fdd8;
  border-radius: 3px;
}

/* Route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(-50%);
}

.route-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 1.6s;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(0%);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

.loader-enter-active {
  animation: slider 2.2s both;
}

.loader-leave-active {
  opacity: 0;
}

@keyframes slider {
  0% {
    background: #1d1d1d;
    transform: translateX(-100%);
  }
  30% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(0%);
  }
  95% {
    transform: translateX(100%);
  }
  100% {
    background: transparent;
  }
}
</style>
