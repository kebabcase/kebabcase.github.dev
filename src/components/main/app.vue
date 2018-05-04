<template>
  <div id="app">
      Name: <el-input v-model="name" type="text"/>
      <image-filter :name="name" :initialEnthusiasm="5"/>
  </div>
</template>

<script lang="ts">
import imageFilter from '../image-filter/image-filter.vue';

export default {
  data() {
    return {
      name: 'Jae',
    };
  },
  components: {
    imageFilter,
  },
};
</script>
