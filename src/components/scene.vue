<template>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
      <Camera :position="{ x: 0, y: 2 , z: 3 }" />
      <Scene ref="scene" background="#181818">
      <AmbientLight></AmbientLight>

        <GltfModel ref="kappa" src="public/models/Kappa.glb" :rotation="{ y: -0.5 }"/>
        <PointLight
            color="white"
            :position="{ x: 5, y: 10, z: 10 }"
            :intensity="2"
        />
    </Scene>
  </Renderer>
</template>

<script>

import {Plane, GltfModel, AmbientLight, Camera, Renderer, Scene} from 'troisjs';

export default {

  components: {
    Plane,
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const kappa = this.$refs.kappa;
    renderer?.value?.onBeforeRender(() => {
      kappa.value.rotate += 0.01;
    })},
};

</script>
