<script setup>
import icon from '@/assets/M.png'
import { ref } from 'vue'
const center = ref([0, 50])
const projection = ref('EPSG:4326')
const zoom = ref(5)
</script>

<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" id="map">
    <ol-view ref="view" :center="center" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer :updateWhileAnimating="true" :updateWhileInteracting="true">
      <ol-source-vector ref="vectorsource">
        <ol-animation-zoom :duration="2000" :zoomOut="true">
          <ol-feature>
            <ol-geom-point :coordinates="[-0.12574, 51.50853]"></ol-geom-point>

            <ol-style>
              <ol-style-icon :src="icon" :scale="0.02"></ol-style-icon>
            </ol-style>
          </ol-feature>
        </ol-animation-zoom>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 5px solid #08fdd8;
  overflow: hidden;
  top: 20px;
}

@media screen and (max-width: 1900px) {
  #map {
    height: 80%;
    margin-top: 120px;
  }
}

@media screen and (max-width: 1280px) {
  #map {
    width: 83%;
    min-height: 600px;
    margin-top: 50px;
  }
}

@media screen and (max-width: 1024px) {
  #map {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  #map {
    margin-top: 0px;
    min-height: 400px;
  }
}
</style>
