<template>
  <div class="projects-container">
    <main-toolbar mode="projects"/>
    <div v-if="projectId">
      <el-row>
      <el-col :span="24">
        <img
          class="projects-feature-image__img"
          :src="featureImage"/>
      </el-col>
      </el-row>
      <el-row
        type="flex"
        justify="center">
        <el-col
          :sm="24"
          :md="18"
          :lg="12">
          <el-card
            class="projects-documentation__card"
            v-html="compiledMarkdown">
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Route} from 'vue-router';
import {Getter, namespace} from 'vuex-class';
import {ProjectMetadata, ProjectsMetadata} from '../../metadata/projects-metadata.d';
import featuredImages from './static';
import documentations from './documentations';
import mainToolbar from '../toolbar/toolbar.vue';
import {markdownWriter} from '../../services';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteUpdate',
]);

const MainGetter = namespace('main', Getter);

@Component({
  components: {
    mainToolbar,
  },
})
export default class ProjectDocumentations extends Vue {
  @MainGetter('availableProjects') private availableProjects: ProjectsMetadata;

  private projectId: string = '';
  private project: ProjectMetadata | null = null;

  private beforeRouteEnter(to: Route, from: Route, next: (cb: any) => void) {
    next((vm: ProjectDocumentations) => {
      vm.updateProjectMetadata();
    });
  }

  private beforeRouteUpdate(to: Route, from: Route, next: () => void) {
    this.updateProjectMetadata(to.params.id);
    next();
  }

  private updateProjectMetadata(id?: string) {
    this.projectId = id || this.$router.currentRoute.params.id;
    this.project = _.find(this.availableProjects, ['id', this.projectId]) as ProjectMetadata;
  }

  private get featureImage() {
    return featuredImages[this.projectId];
  }

  private get compiledMarkdown(): string {
    return markdownWriter.render(documentations[this.projectId]);
  }
}
</script>

<style lang="scss">
.projects-container {
  height: 100%;

  .projects-feature-image__img {
    width: 100%;
    height: 400px;
  }

  .projects-documentation__card {
    padding: 20px;

    img {
      max-width: 100%;
    }
  }
}
</style>
