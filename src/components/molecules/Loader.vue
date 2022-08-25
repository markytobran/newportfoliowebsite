<script setup>
import { ref, onMounted, computed } from 'vue'
let progressBarWidth = ref(0)

function progressBar() {
  var interval = setInterval(function () {
    progressBarWidth.value += 1
    if (progressBarWidth.value === 100) {
      clearInterval(interval)
    }
  }, 10)
}
setTimeout(progressBar, 600)
</script>

<template>
  <div class="absolute top-0 w-full h-full flex flex-col justify-center items-center">
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
</style>
