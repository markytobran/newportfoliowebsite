<script setup>
import { ref, computed } from 'vue'
import CustomSelect from '../components/atoms/CustomSelect.vue'
import ProjectCard from '../components/molecules/ProjectCard.vue'

const filter = ref('all')
const sortBy = ref('Newest first')

const projects = [
  {
    type: 'front-end',
    name: 'Restaurant',
    coverPhoto: 'restaurant',
    description: 'This fresh and modern project is a great example for a responsive restaurant website.',
    websiteLink: '/static/restaurant/index.html',
    gitHubLink: 'https://github.com/markytobran/restaurant',
    techs: [
      { name: 'html', classes: 'h-9 w-9' },
      { name: 'css', classes: 'h-9 w-9' },
      { name: 'javascript', classes: 'h-9 w-9' },
      { name: 'git', classes: 'h-9 w-9' },
    ],
    date: '24 Sep 2019',
  },
  {
    type: 'front-end',
    name: 'Adventure',
    coverPhoto: 'adventure',
    description: 'This is a multi page travel application example. It contains three pages (landing, registration and login page)',
    websiteLink: '/static/adventure/index.html',
    gitHubLink: 'https://github.com/markytobran/adventure',
    techs: [
      { name: 'html', classes: 'h-9 w-9' },
      { name: 'css', classes: 'h-9 w-9' },
      { name: 'javascript', classes: 'h-9 w-9' },
      { name: 'git', classes: 'h-9 w-9' },
    ],
    date: '5 Feb 2020',
  },
  {
    type: 'front-end',
    name: 'Music App',
    coverPhoto: 'music-app',
    description: 'I used the Deezer API to display the songs and the Audio WebAPi lets the user actually play the music.',
    websiteLink: '/static/musicapp/index.html',
    gitHubLink: 'https://github.com/markytobran/musicapp',
    techs: [
      { name: 'html', classes: 'h-9 w-9' },
      { name: 'css', classes: 'h-9 w-9' },
      { name: 'javascript', classes: 'h-9 w-9' },
      { name: 'vue', classes: 'h-6 w-7 mt-1' },
      { name: 'git', classes: 'h-9 w-9' },
    ],
    date: '23 Feb 2020',
  },
  {
    type: 'front-end',
    name: 'Weather app',
    coverPhoto: 'weather',
    description: 'This is a good old weather application. The background accommodates to the actual weather and temperature.',
    websiteLink: '/static/weatherapp/index.html',
    gitHubLink: 'https://github.com/markytobran/weathervue',
    techs: [
      { name: 'html', classes: 'h-9 w-9' },
      { name: 'css', classes: 'h-9 w-9' },
      { name: 'javascript', classes: 'h-9 w-9' },
      { name: 'vue', classes: 'h-6 w-7 mt-1' },
      { name: 'git', classes: 'h-9 w-9' },
    ],
    date: '30 Jan 2020',
  },
  {
    type: 'full-stack',
    name: 'Rodnary',
    coverPhoto: 'rodnary',
    description: 'Rodnary ultimate video platform for passionate anglers.',
    websiteLink: 'https://rodnary.co.uk/',
    gitHubLink: 'https://github.com/markytobran/rodnary-nuxt',
    techs: [
      { name: 'html', classes: 'h-9 w-9' },
      { name: 'css', classes: 'h-9 w-9' },
      { name: 'tailwind', classes: 'h-9 w-9' },
      { name: 'javascript', classes: 'h-9 w-9' },
      { name: 'nuxt', classes: 'h-6 w-8 mt-1' },
      { name: 'typescript', classes: 'h-9 w-9'},
      { name: 'nodejs', classes: 'h-8 w-8' },
      { name: 'express', classes: 'h-8 w-9' },
      { name: 'git', classes: 'h-9 w-9' },
    ],
    date: '29 Mar 2023',
  },
]

const changeFilter = (newFilterValue) => {
  filter.value = newFilterValue
}

const changeSortBy = (event) => {
  sortBy.value = event
}

const filteredProjects = computed(() => {
  return filter.value !== 'all' ? projects.filter((el) => el.type === filter.value) : projects
})

const sortedAndFilteredProjects = computed(() => {
  if (sortBy.value === 'Newest first') {
    return filteredProjects.value.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  if (sortBy.value === 'Oldest first') {
    return filteredProjects.value.sort((a, b) => new Date(a.date) - new Date(b.date))
  }
  if (sortBy.value === 'Name - A-Z') {
    return filteredProjects.value.sort((a, b) => a.name.localeCompare(b.name))
  }
    return filteredProjects.value.sort((a, b) => b.name.localeCompare(a.name))
})
</script>

<template>
  <section class="h-full lg:h-screen w-full lg:w-screen xl:px-20 xl:pt-8">
    <h1 class="text-cyan-blue font-extrabold mb-8">Some things I've built</h1>
    <div class="flex flex-col sm:flex-row">
      <div>
        <h5 class="text-cyan-blue text-xl mb-5">Filters:</h5>
        <ol class="flex flex-col md:flex-row w-full">
          <li class="text-white mb-3 md:mb-0 border-b-white border-b-8 md:h-24 lg:h-auto" @click="changeFilter('all')">
            <button class="text-left">All Projects</button>
          </li>
          <li class="text-white mb-3 md:mb-0 md:ml-14 border-b-primary-pink border-b-8" @click="changeFilter('front-end')">
            <button class="text-left">Front End Projects</button>
          </li>
          <li class="text-white mb-3 md:mb-0 md:ml-14 border-b-cyan-blue border-b-8" @click="changeFilter('back-end')">
            <button class="text-left">Back End Projects</button>
          </li>
          <li class="text-white md:ml-14 border-gradient-pink-cyan border-b-8" @click="changeFilter('full-stack')">
            <button class="text-left">Full Stack Projects</button>
          </li>
        </ol>
      </div>
      <div class="mt-6 md:mt-0 md:ml-48 flex flex-col z-20">
        <h5 class="text-cyan-blue text-xl mb-5">Sort By:</h5>
        <CustomSelect :options="['Newest first', 'Oldest first', 'Name - A-Z', 'Name - Z-A']" @selected="changeSortBy" />
      </div>
    </div>
    <div class="grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-10 project-card-list">
      <ProjectCard v-for="project in sortedAndFilteredProjects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<style>
@media screen and (min-width: 1940px) {
  .project-card-list {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
