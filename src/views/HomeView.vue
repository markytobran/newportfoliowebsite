<template>
  <section class="h-screen flex flex-col items-center justify-center relative overflow-y-hidden">
    <!-- BackGround stars -->
    <transition-group appear @before-enter="beforeEnter">
      <span v-for="star in 150" :key="star" class="absolute right-0 bg-white z-0 home-page-stars" :data-index="star"> </span>
    </transition-group>
    <canvas id="canvas" class="cursor-pointer -mt-24" />

    <div class="w-full flex flex-col justify-center align-items">
      <div class="flex justify-center align-items mb-3 home-cursor">
        <CursorIcon class="swipe -mt-24 md:-mt-36" />
      </div>
      <p class="text-xl md:text-2xl mx-auto block w-11/12 text-center text-white -mt-10 mb:mt-0 mb-12 md:mb-20 home-text">
        I am a degree educated Front End Software Engineer with 3 years commercial experience.
      </p>
      <div class="flex justify-center align-center home-button">
        <RouterLink
          to="/projects"
          class="text-white font-bold text-sm md:text-xl rounded-lg mb-20 border-2 mr-6 px-6 lg:px-10 py-3 md:py-4 text-md md:text-xl border-dark-cyan-blue hover:border-white tracking-widest ease-in-out duration-1000 hover:bg-dark-cyan-blue hover:border-dark-cyan-blue"
          >View my work
        </RouterLink>
        <a
          href="/resume/MarkBranCV.pdf"
          download
          class="text-white font-bold text-sm md:text-xl rounded-lg mb-20 border-2 px-6 lg:px-10 py-3 md:py-4 text-md md:text-xl border-white hover:border-dark-cyan-blue tracking-widest ease-in-out duration-1000 hover:bg-dark-cyan-blue hover:border-dark-cyan-blue"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import CursorIcon from '../components/atoms/CursorIcon.vue'
import { onMounted, ref, onUnmounted } from 'vue'
import { Effect } from '../utils/particleAnimation.js'
const TABLET = 991
const MOBILE = 601

let effect

const beforeEnter = (el) => {
  el.style.right = Math.random() * window.innerWidth + 'px'
  el.style.top = Math.random() * window.innerHeight - 60 + 'px'
  el.style.width = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
  el.style.height = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
}

const updateMousePosition = (event) => {
  effect.updateMousePosition(event)
}

const updateTouchPosition = (event) => {
  effect.updateTouchPosition(event)
}

const createEventListeners = () => {
  if (window.innerWidth > TABLET) window.addEventListener('mousemove', updateMousePosition, false)
  else window.addEventListener('touchmove', updateTouchPosition, false)
}

const removeEventListeners = () => {
  if (window.innerWidth > TABLET) window.removeEventListener('mousemove', updateMousePosition, false)
  else window.removeEventListener('touchmove', updateTouchPosition, false)
}

onMounted(() => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d', {
    willReadFrequently: true,
  })

  const fontSize = window.innerWidth > MOBILE ? 80 : 58
  const maxTextMultiplier = window.innerWidth > MOBILE ? 0.4 : 0.8

  canvas.width = window.innerWidth * 0.8
  canvas.height = window.innerHeight * 0.6

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.render()
    requestAnimationFrame(animate)
  }

  function animateTouch() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.renderTouch()
    requestAnimationFrame(animateTouch)
  }

  setTimeout(() => {
    effect = new Effect(ctx, canvas.width, canvas.height, fontSize, maxTextMultiplier)
    createEventListeners()
    effect.wrapText('Hi, my name is Mark Bran')
  }, 500)

  setTimeout(() => {
    if (window.innerWidth > TABLET) animate()
    else animateTouch()
  }, 3000)
})

onUnmounted(() => {
  removeEventListeners()
})
</script>

<style scoped>
.home-page-stars {
  animation: animStar 20s linear infinite;
}

.home-page-stars:nth-child(3n) {
  animation: starTwinkle 1s infinite linear;
}

@keyframes animStar {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(30px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes starTwinkle {
  0% {
    background: rgba(255, 255, 255, 0.4);
  }
  25% {
    background: rgba(255, 255, 255, 0.8);
  }
  50% {
    background: rgba(255, 255, 255, 1);
  }
  75% {
    background: rgba(255, 255, 255, 0.8);
  }
  100% {
    background: rgba(255, 255, 255, 0.4);
  }
}

.swipe {
  animation: swipe 3s 4s both infinite linear;
}

@keyframes swipe {
  0% {
    transform: translateY(-60%);
  }
  20% {
    transform: translateY(50%);
  }
  30% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-60%);
  }
  50% {
    transform: translateY(50%);
  }
  60% {
    transform: translateY(0%);
  }
  70% {
    transform: translateX(-200%);
  }
  90% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0%);
  }
}

.home-cursor {
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.7s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

.home-text {
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.7s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}

.home-button {
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.7s;
  animation-delay: 6s;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
