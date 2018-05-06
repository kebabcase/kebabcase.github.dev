<template>
  <div id="app">
      <image-filter/>
  </div>
</template>

<script lang="ts">
import store from './app-store';
import imageFilter from '../image-filter/image-filter.vue';

export default {
  store,
  components: {
    imageFilter,
  },
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
