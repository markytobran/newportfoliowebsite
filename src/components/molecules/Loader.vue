<script setup>
import { ref } from 'vue'
let progressBarWidth = ref(0)
const progressTime = window.innerWidth > 500 ? 250 : 580

function progressBar() {
  let interval = setInterval(function () {
    progressBarWidth.value += 1
    if (progressBarWidth.value === 100) {
      clearInterval(interval)
    }
  }, 10)
}
setTimeout(progressBar, progressTime)
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center loading">
    <img src="../../assets/M.png" class="h-8" />
    <h5 class="text-white ml-1 text-md">Mark</h5>
    <p class="text-slate-400 text-xs darker-grey">Mark is thinking</p>
    <div class="h-0.5 bg-white rounded-xl mt-3 relative progress-bar">
      <div class="h-0.5 bg-black absolute top-0 left-0 bg-gradient-to-r from-cyan-blue to-primary-pink" :style="`width: ${progressBarWidth}%`"></div>
    </div>
  </div>
</template>

<style>
.progress-bar {
  width: 350px;
}

@media screen and (max-width: 500px) {
  .progress-bar {
    width: 200px;
  }
}

.loading {
  position: fixed;
  top: 7%;
}
</style>
