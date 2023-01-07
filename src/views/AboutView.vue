<script setup>
import GlassCard from '../components/molecules/GlassCard.vue'
import CubeAnimation from '../components/molecules/CubeAnimation.vue'
</script>
<template>
  <section class="h-full xl:h-screen w-full lg:w-screen p-10 xl:ml-10 2xl:flex 2xl:flex-col 2xl:justify-center">
    <div class="flex flex-col xl:flex-row items-start xl:items-center">
      <div class="w-full">
        <GlassCard title="About me" class="w-full lg:w-10/12">
          <p class="text-white">Degree educated Front-End Developer with a 3 year history of designing, building and maintaining websites.</p>
          <p class="mb-5 text-white">I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
          <p class="mb-5 text-white">Well-organised person, problem solver, independent employee with high attention to detail.</p>
          <p class="mb-5 text-white">Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
          <p class="text-cyan-blue">Lets make something special!</p>
        </GlassCard>
        <GlassCard class="w-full lg:w-10/12 mt-4 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
          <div class="border border-4 p-5 rounded-lg border-cyan-blue w-4/6 lg:w-full mx-auto">
            <img src="../assets/about/team-player.png" class="rounded-xl h-36 w-full xl:h-24 2xl:h-36" alt="Team player" />
            <h4 class="text-white text-center mt-5 pb-7 xl:text-sm 2xl:text-base">Team-player who can also work independently</h4>
          </div>
          <div class="border border-4 p-5 rounded-lg border-cyan-blue w-4/6 lg:w-full mx-auto">
            <img src="../assets/about/newskills.png" class="rounded-xl h-36 w-full xl:h-24 2xl:h-36" alt="New skills" />
            <h4 class="text-white text-center mt-5 pb-7 xl:text-sm 2xl:text-base">Desire to learn and embrace new skills</h4>
          </div>
          <div class="border border-4 p-5 rounded-lg border-cyan-blue w-4/6 lg:w-full mx-auto">
            <img src="../assets/about/attitude.png" class="rounded-xl h-36 w-full xl:h-24 2xl:h-36" alt="Attitude" />
            <h4 class="text-white text-center mt-5 pb-7 xl:text-sm 2xl:text-base">A passion for digital technology and a great attitude.</h4>
          </div>
        </GlassCard>
      </div>
      <div class="w-full lg:w-10/12 xl:w-11/12 mt-12 flex justify-center items-center xl:justify-start lg:mt-24 mb-40">
        <CubeAnimation />
      </div>
    </div>
  </section>
</template>
