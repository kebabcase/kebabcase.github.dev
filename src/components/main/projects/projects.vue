<template>
  <el-carousel
    class="main-projects__carousel"
    :interval="4000"
    type="card"
    height="500px">
    <el-carousel-item
      v-for="project in availableProjects"
      :key="project.id">
      <h3 class="main-projects-label__h3">
        {{project.label}}
      </h3>
      <iframe
        class="main-projects-preview__iframe"
        :src="'/#/projects/' + project.id">
      </iframe>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import {ProjectsMetadata} from '../../../metadata/projects-metadata.d';

const MainGetter = namespace('main', Getter);

@Component
export default class MainProjects extends Vue {
  @MainGetter('availableProjects') private availableProjects: ProjectsMetadata;
}
</script>

<style lang="scss" scoped>
.main-projects__carousel {
  background-color: rgba(255, 255, 255, 0.3);

  .main-projects-label__h3 {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
    line-height: 200px;
    color: #475669;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .main-projects-preview__iframe {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    filter: blur(3px);
  }
}
</style>
