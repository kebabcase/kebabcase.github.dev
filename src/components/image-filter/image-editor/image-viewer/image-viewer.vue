<template>
  <el-row class="image-viewer__row">
    <el-col class="image-viewer__col" :span="24">
      <el-card
        class="image-viewer__card"
        shadow="hover"
        :body-style="{height: '100%', padding: '0px'}">
        <form
          ref="fileform"
          class="image-viewer__uploader-container">
          <div
            class="image-viewer__uploader"
            v-if="!currentImage">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
          </div>
          <img
            class="image-viewer_img"
            v-else
            :src="currentImage"
            :style="{filter: imageFilter}"/>
        </form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component} from 'vue-property-decorator';
import {Mutation, Getter, namespace} from 'vuex-class';
import {Filters} from '../filters/filters';
import {previewImage, isImage} from '../../util/util';

interface DragDropEvent extends Event {
  dataTransfer: DataTransfer;
}

const ImageFilterMutation = namespace('imageFilter', Mutation);
const ImageFilterGetter = namespace('imageFilter', Getter);

@Component
export default class ImageViewer extends Vue {
  public $refs: {
    fileform: HTMLFormElement,
  };

  private dragEvents = Object.freeze([
    'drag',
    'dragstart',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
    'drop',
  ]);
  private dragAndDropAvailable: boolean = this.isDragAndDropAvailable();

  private currentImageName: string = '';
  private currentImage: string = '';

  private imageFilter: string = '';

  // private maxSize = 101027;

  @ImageFilterMutation('selectImage') private selectImage: (image: File) => void;
  @ImageFilterMutation('addImage') private addImage: (file: File) => void;
  @ImageFilterGetter('filters') private filters: {[key: string]: Filters};

  private mounted() {
    if (this.dragAndDropAvailable) {
      _.each(this.dragEvents, (event: string) => {
        this.$refs.fileform.addEventListener(event, ((e: DragDropEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }) as EventListener, false);
      });

      this.$refs.fileform.addEventListener('drop', (e: DragDropEvent) => {
        const droppedFiles = e.dataTransfer.files;

        if (!this.currentImage) {
          this.selectImage(droppedFiles[0]);
        }

        _.each(droppedFiles, (file) => this.addImage(file));
      });
    }

    this.$store.subscribe((mutation) => {
      if (mutation.type === 'imageFilter/selectImage') {
        this.displayImage(mutation.payload);
        this.applyFilters();
      }

      if (mutation.type === 'imageFilter/updateFilter') {
        this.applyFilters();
      }
    });
  }

  private displayImage(file: File) {
    this.currentImageName = file.name;
    this.currentImage = '';
    previewImage(file).then(image => this.currentImage = image);
  }

  private applyFilters() {
    const currentFilter = this.filters[this.currentImageName];
    this.imageFilter = currentFilter ? currentFilter.stringify() : '';
  }

  private isDragAndDropAvailable(): boolean {
    const div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window;
  }
}
</script>

<style lang="scss" scoped>
.image-viewer__row {
  height: 100%;

  .image-viewer__col {
    height: 100%;
  }
}

.image-viewer__card {
  height: 100%;
  text-align: center;

  .image-viewer__uploader-container {
    display: block;
    width: 100%;
    height: 100%;
    background: #ccc;
    text-align: center;
    line-height: 400px;
    border-radius: 4px;

    .image-viewer__uploader {
      width: 100%;
      height: 100%;
    }

    .image-viewer_img {
      height: 100%;
    }
  }
}
</style>
