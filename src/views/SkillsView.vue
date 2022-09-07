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
  <section class="h-full lg:h-screen w-full lg:w-screen p-5 xl:p-10 flex flex-col justify-center">
    <div class="flex flex-col xl:flex-row items-start xl:items-center mt-20">
      <GlassCard class="w-full md:w-10/12 xl:w-5/12 h-full text-white mb-8" title="My skills">
        <p class="mb-5 text-sm md:text-base w-11/12">
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web apps, features, bug fixes, animations, and coding interactive layouts.
        </p>

        <p class="mb-5 w-11/12">I also have full-stack developer experience with popular Node JS (AWS and Amplify).</p>

        <p class="w-11/12">
          Since beginning my journey as a developer nearly 3 years ago, I’ve worked remotely and collaborated with talented people to create unique
          web products for both business and consumer use.
        </p>

        <p class="mt-8">
          Visit my
          <span class="text-cyan-blue font-extrabold">LinkedIn</span> profile for more details or just
          <span class="text-cyan-blue font-extrabold">contact</span> me.
        </p>
      </GlassCard>
      <!--SKILL Section-->
      <div class="w-full xl:w-1/2 h-full xl:ml-24 xl:mt-20">
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
    <!-- 
    <div class="w-full flex flex-col xl:flex-row mt-10 justify-start lg:justify-center mb-20">
     <ExperienceCard
        class="w-full md:w-9/12 xl:w-1/3 2xl:w-1/4 mb-3 md:mb-0 mr-5"
        company="Toolstations / E-commerce Website"
        job="Front-end Developer"
        date="Jul 2021 - Present"
        description="Toolstation is a multi-channel retailer of tools and building
          materials. It has more than 500 branches in the UK, 65 in the
          Netherlands and 23 in France. It was bought by Travis Perkins in 2014."
        url="/experience/toolstation"
      >
        <ToolstationLogo class="h-15 w-1/2 mt-5 mx-auto" />
      </ExperienceCard>
      <ExperienceCard
        class="w-full md:w-9/12 xl:w-1/3 2xl:w-1/4"
        company="J P Hildreth Ltd"
        job="Front-end Developer"
        date="Aug 2020 - Jun 2021"
        description="One of the UK’s leading manufacturing consultancies. They work for
          major companies like Mars & GSK. They help define capital investment
          projects, deliver them and track benefits with certainty."
        url="/experience/jphildreth"
      >
        <img class="h-14 mt-5 mx-auto rounded-xl" src="https://jphildreth.com/wp-content/uploads/2020/09/logo-jpeg-05-05.jpg" />
      </ExperienceCard>
    </div>
     -->
  </section>
</template>
