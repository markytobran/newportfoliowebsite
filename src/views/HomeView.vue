<script setup>
const message = 'Hi, my name is Mark Bran I am a web developer.'
const pinkCharactersList = [15, 16, 17, 18, 19, 20, 21, 22, 23]
const spaces = [3, 6, 11, 14, 19, 24, 26, 29, 31, 35]

const beforeEnter = (el) => {
  el.style.right = Math.random() * window.innerWidth + 'px'
  el.style.top = Math.random() * window.innerHeight - 100 + 'px'
  el.style.width = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
  el.style.height = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
}
</script>

<template>
  <section class="h-screen w-screen">
    <!-- BackGround stars -->
    <transition-group appear @before-enter="beforeEnter">
      <span v-for="star in 300" :key="star" class="absolute right-0 bg-white z-0 home-page-stars" :data-index="star"> </span>
    </transition-group>

    <!--Title -->
    <div id="title" class="absolute top-1/2 left-1/2 -translate-x-2/4 -mt-12 w-full px-12 text-white text-center font-extrabold">
      <div class="mb-12">
        <span
          v-for="(letter, index) in message.split('')"
          :key="letter"
          class="inline-block letter text-2xl md:text-4xl xl:text-5.5xl tracking-widest"
          :class="[spaces.includes(index) ? 'ml-3' : '', pinkCharactersList.includes(index) ? 'text-primary-pink' : 'text-white']"
        >
          {{ letter }}
        </span>
      </div>
      <RouterLink
        to="/projects"
        class="text-white font-bold text-xl rounded-lg border-2 px-6 lg:px-10 py-3 md:py-4 text-md md:text-xl tracking-widest ease-in-out duration-1000 hover:bg-dark-cyan-blue hover:border-dark-cyan-blue"
        >View my work</RouterLink
      >
    </div>
  </section>
</template>

<style scoped>
.letter:nth-child(odd) {
  transform: translateY(-700%);
  animation: fall 4s 1.9s ease-in forwards, rubber 1s 4s infinite;
}

.letter:nth-child(even) {
  transform: translateY(-700%);
  animation: fall 5s 2s ease-in forwards, shake 1s 5s infinite;
}

.letter:nth-child(3n) {
  transform: translateY(-700%);
  animation: fall 7s 1.6s ease-in forwards, shake 1s 7s infinite;
}

.letter:nth-child(4n) {
  transform: translateY(-700%);
  animation: fall 7s 1.2s ease-in forwards, rubber 1s 7s infinite;
}

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

/*****FALL */

@keyframes fall {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
    transform: translateY(0%);
  }
  45% {
    transform: translateY(-30%);
  }
  60% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
  }
}
/* ****************Animation*********/
@keyframes rubber {
  0% {
    transform: translateY(-100%);
    transform: scale3d(1, 1, 1);
  }
  35% {
    transform: scale3d(1.25, 0.75, 1);
  }
  45% {
    transform: scale3d(0.75, 1, 1);
  }
  60% {
    transform: scale3d(1.2, 0.8, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  25% {
    transform: translate(1px, 1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, -1px) rotate(-1deg);
  }
  75% {
    transform: translate(2px, -1px) rotate(2deg);
  }
  100% {
    transform: translate(-1px, 1px) rotate(-1deg);
  }
}

/* route transitions */
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
</style>
