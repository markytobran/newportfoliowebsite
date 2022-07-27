<script setup>
import { onMounted, ref } from 'vue'

const emit = defineEmits(['selected'])

const props = defineProps({
  options: Array,
})

const selected = ref(props.options[0])
const open = ref(false)

function onSelected(option) {
  selected.value = option
  open.value = false
  emit('selected', option)
}
</script>

<template>
  <div class="custom-select w-48 relative outline-none leading-10" tabindex="0" @blur="open = false">
    <div
      class="bg-black border-primary-pink border-2 text-white pl-2 cursor-pointer rounded-md select-none relative z-50 h-10"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items text-white z-40 left-0 right-0 bg-black absolute border-primary-pink border-x-2 rounded-b-md border-b-2 -mt-1"
      :class="{ hidden: !open }"
    >
      <span
        class="text-white cursor-pointer select-none hover:bg-primary-pink block px-2"
        v-for="(option, i) in options"
        :key="option"
        @click="onSelected(option)"
      >
        {{ option }}
      </span>
    </div>
    <svg
      class="h-8 absolute top-0 right-2 z-50 pointer-events-none move-down"
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#f24b67"
    >
      <path
        d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
      />
    </svg>
  </div>
</template>

<style>
.move-down {
  animation: moveDown 1s linear infinite forwards;
}

@keyframes moveDown {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(6px);
  }
  75% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
