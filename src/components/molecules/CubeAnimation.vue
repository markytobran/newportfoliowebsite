<script setup>
import * as THREE from 'three'
import { onMounted, onUnmounted } from 'vue'

let cursor = {
  x: 0,
  y: 0,
}

// Sizes
let sizes = {
  width: 650,
  height: 650,
}

const cursorHandler = (e) => {
  cursor.x = e.clientX / sizes.width - 0.5
  cursor.y = -(e.clientY / sizes.height - 0.5)
}

const updateScreenSize = () => {
  if (window.innerWidth > 1600 && window.innerWidth < 1950) {
    sizes.width = 550
    sizes.height = 550
  }

  if (window.innerWidth > 600 && window.innerWidth < 1600) {
    sizes.width = 400
    sizes.height = 400
  }
  if (window.innerWidth < 600) {
    sizes.width = window.innerWidth - 90
    sizes.height = 400
  }
}

onMounted(() => {
  //SetSizes
  updateScreenSize()
  // Canvas
  const canvas = document.querySelector('canvas.webgl')

  //Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#181818')

  // Object
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: '#08fdd8' })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  window.addEventListener('mousemove', (event) => cursorHandler(event))
  window.addEventListener('resize', () => {
    updateScreenSize()
    renderer.setSize(sizes.width, sizes.height)
  })

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 3
  scene.add(camera)

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })
  renderer.setSize(sizes.width, sizes.height)

  const clock = new THREE.Clock()

  const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.y = elapsedTime * Math.PI * 1.2
    mesh.rotation.x = elapsedTime

    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 5
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 5
    camera.position.y = cursor.y * 3
    camera.lookAt(mesh.position)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  tick()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', (event) => cursorHandler(event))
  window.addEventListener('resize', updateScreenSize)
})
</script>

<template>
  <canvas class="webgl w-full h-full glass cursor-pointer"></canvas>
</template>
