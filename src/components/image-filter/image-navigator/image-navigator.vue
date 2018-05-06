<template>
  <el-menu
    class="image-navigator__menu"
    default-active="0">
    <el-menu-item
      v-for="(availableImage, index) in availableImages"
      :key="availableImage.name"
      :index="index + ''">
      {{availableImage.name}}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';

const ModuleGetter = namespace('imageFilter', Getter);

@Component
export default class ImageNavigator extends Vue {
  @ModuleGetter('availableImages') private availableImages: File[];
}
</script>

<style lang="scss" scoped>
.image-navigator__menu {
  height: 100%;
}
</style>
