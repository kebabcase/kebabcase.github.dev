<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="500px">
    <el-carousel-item
      v-for="project in availableProjects"
      :key="project.id">
      <h3>{{ project.label }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import {Projects} from './projects.d';

const MainGetter = namespace('main', Getter);

@Component
export default class MainProjects extends Vue {
  @MainGetter('availableProjects') private availableProjects: Projects;
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
