<template>
  <section class="h-screen w-screen overflow-hidden not-found">
    <div class="moon absolute -top-40 -left-30 z-40 rounded-full">
      <div class="crater moon__crater1 z-30"></div>
      <div class="crater moon__crater2 z-30"></div>
      <div class="crater moon__crater3 z-30"></div>
      <div class="absolute top-1/3 left-1/4">
        <p class="flex flex-col mb-12">
          <span class="text-9xl font-extrabold text-mid-grey">404</span>
          <span class="text-3xl font-extrabold text-neutral-500"
            >Ooops! Page not found.</span
          >
        </p>
        <RouterLink
          to="/"
          class="text-black font-bold text-xl border-4 border-black px-12 py-2 font-extrabold text-2xl bg-transparent hover:bg-black hover:text-white ease-in duration-300"
          >Go Home</RouterLink
        >
      </div>
    </div>
    <div class="astronaut">
      <img
        src="../assets/astronaut.png"
        alt="Astronaut"
        class="absolute top-1/2 w-48 z-50"
      />
    </div>
  </section>
</template>
<style>
.moon {
  background: linear-gradient(
    90deg,
    rgba(208, 208, 208, 1) 48%,
    rgba(145, 145, 145, 1) 100%
  );
  width: 900px;
  height: 900px;
  position: relative;
}

.crater {
  position: absolute;
  content: '';
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    rgba(122, 122, 122, 1) 38%,
    rgba(195, 195, 195, 1) 100%
  );
  opacity: 0.6;
}

.moon__crater1 {
  top: 250px;
  right: 100px;
  width: 60px;
  height: 180px;
}

.moon__crater2 {
  top: 650px;
  left: 340px;
  width: 40px;
  height: 80px;
  transform: rotate(55deg);
}

.moon__crater3 {
  top: -20px;
  left: 40px;
  width: 65px;
  height: 120px;
  transform: rotate(250deg);
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  right: 0;
  animation: starTwinkle 3s infinite linear;
}
.astronaut img {
  animation: astronautFly 6s infinite linear;
}
@keyframes astronautFly {
  0% {
    left: -100px;
  }
  25% {
    top: 50%;
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(45deg);
    top: 55%;
  }
  75% {
    top: 60%;
    transform: rotate(30deg);
  }
  100% {
    left: 110%;
    transform: rotate(45deg);
  }
}
@keyframes starTwinkle {
  0% {
    background: rgba(255, 255, 255, 0.4);
  }
  25% {
    background: rgba(255, 255, 255, 0.8);
  }
  50% {
    background: rgba(255, 255, 255, 1);
  }
  75% {
    background: rgba(255, 255, 255, 0.8);
  }
  100% {
    background: rgba(255, 255, 255, 0.4);
  }
}
</style>
