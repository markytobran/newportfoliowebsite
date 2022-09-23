<script setup>
import GlassCard from '../components/molecules/GlassCard.vue'
import SkillElement from '../components/atoms/SkillElement.vue'
import ToolstationLogo from '../components/atoms/ToolstationLogo.vue'
import ExperienceCard from '../components/molecules/ExperienceCard.vue'
const frontEnd = [
  'HTML5',
  'CSS3',
  'SASS',
  'TAILWIND',
  'BOOTSTRAP',
  'JAVASCRIPT',
  'VUE.JS',
  'VUEX',
  'NUXT.JS',
  'TYPESCRIPT',
  'A/B TESTING MONETATE',
  'JEST',
]

const backEnd = ['NODE.JS', 'EXPRESS.JS', 'MONGO DB']
const otherTech = ['GIT', 'GITHUB', 'BITBUCKET', 'NPM', 'JIRA', 'FIGMA', 'WORDPRESS']
</script>

<template>
  <section class="h-full lg:h-screen w-full lg:w-screen p-10 landscape:pt-56 xl:p-24 flex flex-col justify-center">
    <div class="flex flex-col xl:flex-row items-start xl:items-center">
      <GlassCard class="w-full md:w-10/12 xl:w-5/12 h-full text-white mb-8" title="My skills">
        <p class="mb-5 text-md md:text-lg w-11/12">
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web apps, features, bug fixes, animations, and coding interactive layouts.
        </p>

        <p class="mb-5 w-11/12 text-md md:text-lg">I also have full-stack developer experience with popular Node JS (AWS and Amplify).</p>

        <p class="w-11/12 text-md md:text-lg">
          Since beginning my journey as a developer nearly 3 years ago, I’ve worked remotely and collaborated with talented people to create unique
          web products for both business and consumer use.
        </p>

        <p class="mt-8 text-md md:text-lg">
          Visit my
          <a href="https://www.linkedin.com/in/markbran/" class="text-cyan-blue font-extrabold" target="_blank">LinkedIn</a> profile for more details
          or just <RouterLink to="/contact" class="text-cyan-blue font-extrabold">contact</RouterLink> me.
        </p>
      </GlassCard>
      <!--SKILL Section-->
      <div class="w-full xl:w-1/2 h-full xl:ml-24 xl:translate-y-12 mb-32 md:mb-0">
        <div class="px-3 w-full lg:w-10/12">
          <SkillElement title="Front-end" :tech-list="frontEnd" />
        </div>
        <div class="px-3 mt-3">
          <SkillElement title="Back-end" :tech-list="backEnd" />
        </div>
        <div class="px-3 mt-3 w-full lg:w-10/12">
          <SkillElement title="Other technologies" :tech-list="otherTech" />
        </div>
      </div>
    </div>
  </section>
</template>
