<template>
  <el-menu
    class="image-navigator__menu"
    default-active="0">
    <el-menu-item
      v-for="(availableImage, index) in availableImages"
      :key="availableImage.name"
      :index="index + ''"
      @click="selectImage(availableImage)">
      <img
        class="image-navigator__thumbnail"
        :src="thumbnails[availableImage.name]"/>
      <span>{{availableImage.name}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Mutation, Getter, namespace} from 'vuex-class';
import {previewImage} from '../util/util';

const ImageFilterMutation = namespace('imageFilter', Mutation);
const ImageFilterGetter = namespace('imageFilter', Getter);

@Component
export default class ImageNavigator extends Vue {
  @ImageFilterMutation('selectImage') private selectImage: (image: File) => void;
  @ImageFilterGetter('availableImages') private availableImages: File[];

  private thumbnails: {[key: string]: string} = {};

  private mounted() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'imageFilter/addImage') {
        this.addThumbnail(mutation.payload);
      }
    });
  }

  private addThumbnail(file: File) {
    previewImage(file).then(image => this.$set(this.thumbnails, file.name, image));
  }
}
</script>

<style lang="scss" scoped>
.image-navigator__menu {
  height: 100%;

  .image-navigator__thumbnail {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
