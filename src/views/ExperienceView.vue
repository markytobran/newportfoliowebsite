<script setup>
import { ref, computed } from 'vue'
import CustomSelect from '../components/atoms/CustomSelect.vue'
import GlassCard from '../components/molecules/GlassCard.vue'
import ProjectCard from '../components/molecules/ProjectCard.vue'
import ExperienceCard from '../components/molecules/ExperienceCard.vue'
import ToolstationLogo from '../components/atoms/ToolstationLogo.vue'
import { companies } from '../data/companies.js'

const sortBy = ref('Newest first')

const changeSortBy = (event) => {
  sortBy.value = event
}

const sortedCompanies = computed(() => {
  if (sortBy.value === 'Oldest first') {
    return companies.sort((a, b) => new Date(a.dateForCompare) - new Date(b.dateForCompare))
  }
  if (sortBy.value === 'Newest first') {
    return companies.sort((a, b) => new Date(b.dateForCompare) - new Date(a.dateForCompare))
  }
  if (sortBy.value === 'Name - A-Z') {
    return companies.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (sortBy.value === 'Name - Z-A') {
    return companies.sort((a, b) => b.name.localeCompare(a.name))
  }
})
</script>

<template>
  <section class="h-full lg:h-screen w-full lg:w-screen xl:px-20 xl:pt-8">
    <h1 class="text-cyan-blue font-extrabold mb-8">My experience</h1>
    <div class="flex flex-col sm:flex-row">
      <div class="mt-6 flex flex-col z-20">
        <h5 class="text-cyan-blue text-xl mb-5">Sort By:</h5>
        <CustomSelect :options="['Newest first', 'Oldest first', 'Name - A-Z', 'Name - Z-A']" @selected="changeSortBy" />
      </div>
    </div>
    <div class="grid grid-cols-1 grid-rows-1 w-full gap-10 lg:grid-cols-2 mt-14 lg:w-10/12 2xl:grid-cols-3 3xl:grid-cols-4">
      <ExperienceCard
        v-for="company in sortedCompanies"
        :key="company.name"
        :company="company.name"
        :job="company.job"
        :date="company.date"
        :description="company.description"
        :more-description="company.moreDescription"
        :job-list="company.jobList"
        :techs="company.techs"
      >
        <img :class="company.classes" :src="company.imgURL" />
      </ExperienceCard>
    </div>
  </section>
</template>
