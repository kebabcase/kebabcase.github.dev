<template>
  <el-row class="image-toolbar__container">
    <el-col
      class="image-toolbar__left-container"
      :span="1">
      <el-button @click="onMenuClicked">
        <i class="el-icon-menu"/>
      </el-button>
    </el-col>
    <el-col
      class="image-toolbar__right-container"
      :span="1">
      <el-button @click="onDownloadClicked">
        <i class="el-icon-download"/>
      </el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Mutation, Getter, namespace} from 'vuex-class';
import {Filters} from '../image-editor/filters/filters';
import {downloadImage} from '../util/util';

const ImageFilterMutation = namespace('imageFilter', Mutation);
const ImageFilterGetter = namespace('imageFilter', Getter);

@Component
export default class ImageToolbar extends Vue {
  @ImageFilterMutation('toggleNavigator') private toggleNavigator: () => void;
  @ImageFilterGetter('selectedImage') private selectedImage: File;
  @ImageFilterGetter('filters') private filters: {[key: string]: Filters};

  private onMenuClicked() {
    this.toggleNavigator();
  }

  private onDownloadClicked() {
    if (this.selectedImage) {
      const currentImageName = this.selectedImage.name;
      const currentFilter = this.filters[currentImageName] ?
        this.filters[currentImageName].stringify() :
        '';

      downloadImage(this.selectedImage, currentFilter);
    }
  }
}
</script>

<style lang="scss" scoped>
.image-toolbar__container {
  margin: 10px 0;

  .image-toolbar__right-container {
    float: right;
  }
}
</style>
