<template>
  <el-container class="image-editor__container">
    <el-main class="image-editor__main">
      <image-viewer></image-viewer>
    </el-main>
    <el-footer class="image-editor__footer">
      <slider-editor></slider-editor>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component} from 'vue-property-decorator';
import imageViewer from './image-viewer/image-viewer.vue';
import sliderEditor from './slider-editor/slider-editor.vue';

@Component({
  components: {
    imageViewer,
    sliderEditor,
  },
})
export default class ImageEditor extends Vue {
}
</script>

<style lang="scss" scoped>
.image-editor__container {
  width: 100%;
  height: 100%;

  .image-editor__main {
    width: 100%;
    height: calc(100% - 100px);
  }

  .image-editor__footer {
    height: 100px !important;
  }
}
</style>

