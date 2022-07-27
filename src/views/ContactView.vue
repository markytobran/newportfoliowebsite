<script setup>
import { onMounted, ref } from 'vue'
import GlassCard from '../components/molecules/GlassCard.vue'
import Map from '../components/molecules/Map.vue'

const showMap = ref(false)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const errorMessage = ref('')

const submitMessage = () => {
  if (name.value.length < 3) {
    errorMessage.value = 'Please provide a valid name'
    return
  }
  if (!email.value.match(re)) {
    errorMessage.value = 'Please provide a valid email address'
    return
  }
  if (subject.value.length < 3) {
    errorMessage.value = 'Please provide a valid subject'
    return
  }
  if (message.value.length < 20) {
    errorMessage.value = 'Please provide a longer message'
    return
  }

  //Send data

  resetForm()
}

const resetForm = () => {
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  errorMessage.value = ''
}

onMounted(() => {
  setTimeout(() => (showMap.value = true), 2400)
})
</script>
<template>
  <section class="h-full lg:h-screen w-full lg:w-screen flex flex-col xl:flex-row xl:items-center">
    <GlassCard class="w-full lg:w-10/12 xl:w-5/12 text-white mb-8" title="Get in touch">
      <p class="text-white text-lg">
        My inbox is always open. Whether you have a question or just want to say hi. I will try my best to get back to you.
      </p>
      <p class="bg-red-700 p-3 rounded-lg mt-3" v-if="errorMessage.length">
        {{ errorMessage }}
      </p>
      <form @submit.prevent="submitMessage" novalidate>
        <div class="flex space-x-4 w-full mb-5 mt-5">
          <input type="text" min="3" max="255" class="h-12 bg-mid-grey w-1/2 pl-5 rounded-md outline-0" placeholder="Name" v-model="name" />
          <input type="email" class="h-12 bg-mid-grey w-1/2 pl-5 rounded-md outline-0" placeholder="Email" v-model="email" />
        </div>
        <input type="text" class="w-full h-12 bg-mid-grey pl-5 rounded-md outline-0" placeholder="Subject" v-model="subject" />
        <textarea rows="4" class="w-full h-full bg-mid-grey pl-5 pt-5 rounded-md mt-5 outline-0" placeholder="Message" v-model="message" />
        <button class="h-12 border-2 border-cyan-blue px-8 py-3 text-cyan-blue block ml-auto mt-5 rounded-sm">Send message</button>
      </form>
    </GlassCard>
    <div class="h-full w-full mb-20 xl:w-1/2 mt-12 xl:pl-10">
      <Map v-if="showMap" />
    </div>
  </section>
</template>
