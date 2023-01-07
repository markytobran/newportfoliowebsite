<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import Github from './components/icons/Github.vue'
import Linkedin from './components/icons/Linkedin.vue'
import Header from './components/molecules/Header.vue'
import Loader from './components/molecules/Loader.vue'

const router = useRouter()
const route = useRoute()

let isLoading = ref(false)

router.beforeEach((to, from, next) => {
  if (to.name !== 'home') {
    setTimeout(() => (isLoading.value = true), 150)
    setTimeout(() => (isLoading.value = false), 2000)
  }
  next()
})
</script>

<template>
  <Header />
  <main class="bg-light-grey overflow-x-hidden relative w-full">
    <!-- Loader animation-->
    <transition name="loader">
      <Loader v-if="isLoading" />
    </transition>

    <!--Router-->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" class="p-3 md:p-10" />
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
  transition-delay: 1.75s;
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
