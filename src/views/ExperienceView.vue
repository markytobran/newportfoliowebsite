<script setup>
import { ref, computed } from 'vue'
import CustomSelect from '../components/atoms/CustomSelect.vue'
import GlassCard from '../components/molecules/GlassCard.vue'
import ProjectCard from '../components/molecules/ProjectCard.vue'
import ExperienceCard from '../components/molecules/ExperienceCard.vue'
import ToolstationLogo from '../components/atoms/ToolstationLogo.vue'

const sortBy = ref('Newest first')

const companies = [
  {
    name: 'Toolstations / E-commerce Website',
    job: 'Front-end Developer',
    date: 'Jul 2021 - Present',
    description:
      'Toolstation is a multi-channel retailer of tools and building materials. It has more than 500 branches in the UK, 65 in the Netherlands and 23 in France. It was bought by Travis Perkins in 2014.',
    classes: 'h-15 w-1/2 mt-5 mx-auto',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Toolstation_logo.svg',
    dateForCompare: '01/07/2021',
    moreDescription:
      'Brought on board to maintain and add new features to the company’s old and new website. Also, responsible for the company’s A/B testing.',
    jobList: [
      'Fixed bugs/errors on multiple production sites (FR, NL, BE, UK)',
      'Implemented new features from UX design (Figma)',
      'Created high quality components that renders across multiple devices',
      'Restyled Product, Search, Product Listing pages using Monetate (A/B testing platform)',
    ],
    techs: [
      'HTML5',
      'CSS3',
      'SASS',
      'Bootstrap',
      'Tailwind',
      'JavaScript',
      'Vue.js',
      'Vuex',
      'Nuxt.js',
      'Typescript',
      'Node.js',
      'Jest',
      'Laravel Blades',
      'Wordpress',
      'A/B Testing(Monetate)',
      'NPM',
      'Git',
      'Bitbucket',
      'Github',
      'Jira',
    ],
  },
  {
    name: 'J P Hildreth Ltd',
    job: 'Front-end Developer',
    date: 'Aug 2020 - Jun 2021',
    description:
      'One of the UK’s leading manufacturing consultancies. They work for major companies like Mars & GSK. They help define capital investment projects, deliver them and track benefits with certainty.',
    classes: 'h-14 mt-5 mx-auto rounded-xl',
    imgURL: 'https://jphildreth.com/wp-content/uploads/2020/09/logo-jpeg-05-05.jpg',
    dateForCompare: '01/08/2020',
    moreDescription: 'Helped to develop a web application which helps the business to calculate the product price during the manufacturing process.',
    jobList: [
      'Successfully designed and developed high quality user interfaces',
      'Implemented new features from UX design (Figma)',
      'Created high quality components that renders across multiple devices',
      'Implemented a UI plugin which was used across multiple application',
    ],
    techs: ['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'JavaScript', 'Vue.js', 'Vuex', 'Node.js', 'AWS', 'Amplify', 'Jest', 'NPM', 'Git', 'Gitlab'],
  },
]

const changeSortBy = (event) => {
  sortBy.value = event
}

const sortedCompanies = computed(() => {
  if (sortBy.value === 'Newest first') {
    return companies.sort((a, b) => new Date(a.dateForCompare) - new Date(b.dateForCompare))
  }
  if (sortBy.value === 'Oldest first') {
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
    <div class="grid grid-cols-4 gap-10 mt-14">
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
