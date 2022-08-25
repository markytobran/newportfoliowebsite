<script setup>
import { onMounted, ref } from 'vue'
import GlassCard from '../components/molecules/GlassCard.vue'
import Map from '../components/molecules/Map.vue'

const cardTitle = ref('Get in touch')
const showMap = ref(false)
const showForm = ref(true)
const messageSuccess = ref(false)
const error = ref(false)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const errorMessage = ref('')

const isInputValid = () => {
  if (name.value.length < 3) {
    errorMessage.value = 'Please provide a valid name'
    return false
  }
  if (!email.value.match(re)) {
    errorMessage.value = 'Please provide a valid email address'
    return false
  }
  if (subject.value.length < 3) {
    errorMessage.value = 'Please provide a valid subject'
    return false
  }
  if (message.value.length < 20) {
    errorMessage.value = 'Please provide a longer message'
    return false
  }

  return true
}

const toggleForm = () => {
  showForm.value = !showForm.value
}

const toggleError = () => {
  error.value = !error.value
}

const toggleSuccess = () => {
  messageSuccess.value = !messageSuccess.value
}

const changeCardTitle = (title = '') => {
  cardTitle.value = title
}

const submitMessage = async () => {
  if (isInputValid()) {
    try {
      await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      })

      resetForm()
      changeCardTitle()
      toggleForm()
      toggleSuccess()

      setTimeout(() => {
        toggleForm()
        toggleSuccess()
      }, 4000)
      setTimeout(() => changeCardTitle('Get in touch'), 5500)
    } catch (e) {
      resetForm()
      changeCardTitle()
      toggleForm()
      toggleError()

      setTimeout(() => {
        toggleForm()
        toggleError()
      }, 4000)
      setTimeout(() => changeCardTitle('Get in touch'), 5500)
    }
  }
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
    <GlassCard class="w-full lg:w-10/12 xl:w-5/12 text-white mb-8 relative z-30" :title="cardTitle">
      <div v-if="showForm" id="contact-form" class="opacity-0">
        <p class="text-white text-lg">
          My inbox is always open. Whether you have a question or just want to say hi.<br />I will try my best to get back to you.
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
      </div>
      <div v-if="messageSuccess" class="h-96 flex justify-center items-center">
        <p class="text-cyan-blue text-4xl font-extrabold mb-5" id="message">Message was successfully sent</p>
        <img src="../assets/moon-form.svg" alt="moon" class="h-50 w-20 absolute top-0 right-0" id="moon" />
        <img src="../assets/rocket-form.svg" alt="rocket" class="h-50 w-20 absolute bottom-20 left-1/2" id="rocket" />
      </div>
      <div v-if="error" class="h-96 flex flex-col justify-center items-center">
        <p class="text-cyan-blue text-4xl font-extrabold mb-5" id="message">Something went wrong :(</p>
        <p class="text-cyan-blue text-4xl font-extrabold mb-5" id="message">Please try again.</p>
      </div>
    </GlassCard>
    <div class="h-full w-full mb-20 xl:w-1/2 mt-12 xl:pl-10">
      <Map v-if="showMap" />
    </div>
  </section>
</template>

<style>
#contact-form {
  animation: pop 2s 1.5s forwards;
}

#rocket {
  animation: fly 5s 1 cubic-bezier(0.7, -0.12, 0.57, 0.88) forwards;
  z-index: 0;
}

#moon {
  animation: shake 5s infinite forwards;
}

#message {
  animation: pop 5s 0.4 forwards;
}

@keyframes pop {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0);
  }
  100% {
    opacity: 1;
    transform: translateY(10px) scale(1);
  }
}

@keyframes shake {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  30% {
    opacity: 1;
    transform: translateX(-10%);
  }
  50% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes fly {
  0% {
    opacity: 0;
    bottom: 0;
    left: 40%;
    transform: rotate(-50deg);
  }
  80% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    left: 100%;
  }
}
</style>
