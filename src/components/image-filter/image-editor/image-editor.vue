<template>
  <el-container class="image-editor-container">
    <el-main class="image-editor-main">
      <image-viewer></image-viewer>
    </el-main>
    <el-footer>
      <slider-editor></slider-editor>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component, Prop} from 'vue-property-decorator';
import imageViewer from './image-viewer/image-viewer.vue';
import sliderEditor from './slider-editor/slider-editor.vue';

@Component({
  components: {
    imageViewer,
    sliderEditor,
  },
})
export default class ImageEditor extends Vue {
  // @Prop() private addPhotoToList: (photo: File) => void;
}
</script>

<style lang="scss" scoped>
.image-editor-container {
  width: 100%;
  height: 100%;

  .image-editor-main {
    width: 100%;
    height: calc(100% - 60px);
  }
}
</style>

