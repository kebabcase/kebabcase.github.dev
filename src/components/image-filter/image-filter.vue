<template>
  <el-container class="image-filter__container">
    <el-header class="image-filter__header">
      <image-toolbar/>
    </el-header>
    <el-container class="image-filter__body">
      <el-aside :style="{width: isNavigatorOpen ? navigatorWidth : '0px'}">
        <image-navigator/>
      </el-aside>
      <image-editor/>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import imageToolbar from './image-toolbar/image-toolbar.vue';
import imageEditor from './image-editor/image-editor.vue';
import imageNavigator from './image-navigator/image-navigator.vue';

const ImageFilterGetter = namespace('imageFilter', Getter);

@Component({
  components: {
    imageToolbar,
    imageEditor,
    imageNavigator,
  },
})
export default class ImageFilter extends Vue {
  @ImageFilterGetter('isNavigatorOpen') private isNavigatorOpen: boolean;

  private navigatorWidth: string = '300px';
}
</script>

<style lang="scss" scoped>
.image-filter__container {
  width: 100%;
  height: 100%;

  .image-filter__header {
    width: 100%;
    height: 60px;
  }

  .image-filter__body {
    height: calc(100% - 60px);
  }
}
</style>
