<script setup>
import Github from '../icons/Github.vue'
import Linkedin from '../icons/Linkedin.vue'

const navHeaders = [
  { name: 'About', path: '/about' },
  { name: 'My Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <header class="fixed md:relative bottom-0 h-20 md:h-screen w-full md:w-40 bg-black md:bg-dark-grey z-50">
    <nav class="flex flex-col justify-center align-center pt-4 pb-2 md:pt-0 md:pb-0 relative w-full md:w-40">
      <!--Desktop Logo-->
      <RouterLink to="/" class="hidden md:flex flex-col mb-14 bg-black h-48 flex-col justify-center align-center">
        <img src="../../assets/M.png" class="w-16 h-12 mt-2 mx-auto" />
        <span class="text-white font-extrabold text-xl block h-12 mt-4 mx-auto">Mark</span>
        <span class="text-xs mx-auto text-neutral-400">Front End Developer</span>
      </RouterLink>
      <ul class="flex justify-evenly items-center md:items-start md:flex-col ml-0 md:ml-3">
        <!--Mobile Home icon-->
        <RouterLink to="/" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" class="-mt-2">
            <path
              d="M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"
            />
          </svg>
        </RouterLink>
        <li v-for="nav in navHeaders" class="relative md:w-full md:mb-2">
          <RouterLink :to="nav.path" class="text-white font-bold text-sm md:text-xl mb-1">
            {{ nav.name }}
          </RouterLink>
          <span class="h-3 w-3 bg-cyan-blue block mx-auto md:absolute md:top-2 md:right-1 rounded-full opacity-0"></span>
        </li>
        <li class="flex mt-20 absolute md:relative bottom-12 left-2">
          <a href="https://github.com/markytobran" target="_blank">
            <Github class="mr-4 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/markbran/" target="_blank">
            <Linkedin class="cursor-pointer" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul li a ~ span {
  display: block;
  transform: translateX(-30px);
  transition: all 0.5s 1s ease-in;
}
ul li a.router-link-active ~ span {
  transform: translateX(0);
  opacity: 1;
}
</style>
