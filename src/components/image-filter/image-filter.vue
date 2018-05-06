<template>
  <el-container class="image-filter__container">
    <el-aside>
      <image-navigator/>
    </el-aside>
    <image-editor/>
  </el-container>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component} from 'vue-property-decorator';
import imageEditor from './image-editor/image-editor.vue';
import imageNavigator from './image-navigator/image-navigator.vue';

@Component({
  components: {
    imageEditor,
    imageNavigator,
  },
})
export default class ImageFilter extends Vue {
}
</script>

<style>
.image-filter__container {
  width: 100%;
  height: 100%;
}
</style>
