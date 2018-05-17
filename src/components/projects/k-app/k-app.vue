<template>
  <div class="projects-k-app-container">
    <main-toolbar mode="projects"/>
    <el-row>
      <el-col :span="24">
        <img
          class="projects-k-app-feature-image__img"
          src="./static/feature-image.png"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :offset="6"
        :span="12">
        <el-card
          class="projects-k-app-documentation__card"
          v-html="compiledMarkdown">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import mainToolbar from '../../toolbar/toolbar.vue';
import {markdownWriter} from '../../../services';
import documentation from './documentation';

@Component({
  components: {
    mainToolbar,
  },
})
export default class KApp extends Vue {
  private get compiledMarkdown(): string {
    return markdownWriter.render(documentation);
  }
}
</script>

<style lang="scss" scoped>
.projects-k-app-container {
  height: 100%;

  .projects-k-app-feature-image__img {
    width: 100%;
  }

  .projects-k-app-documentation__card {
    padding: 20px;
  }
}
</style>
