<script setup>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel, } from '@tresjs/cientos'

</script>
<template>
  <TresCanvas clear-color="#eee" v-bind="gl">
    <TresPerspectiveCamera :position="[0.5, 1.2, 2]"/>
    <OrbitControls />
    <Suspense>
      <GLTFModel path="/models/Kappa.gltf" :position="[0, -0.8, 0]" draco ref="Kappa"/>
    </Suspense>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
