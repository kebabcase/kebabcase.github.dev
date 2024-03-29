<template>
  <el-menu
    class="main-toolbar__menu"
    mode="horizontal"
    @select="onSelect">
    <el-menu-item
      index="back"
      v-if="mode !== 'main'"
      class="main-toolbar-back__menu-item">
      <i class="el-icon-back"/>
    </el-menu-item>
    <el-menu-item index="about">About</el-menu-item>
    <el-submenu index="projects">
      <template slot="title">Projects</template>
      <el-menu-item
        v-for="project in availableProjects"
        :key="project.id"
        :index="project.id">
        {{project.label}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import {ProjectMetadata, ProjectsMetadata} from '../../metadata/projects-metadata.d';

const MainGetter = namespace('main', Getter);

@Component
export default class MainToolbar extends Vue {
  @MainGetter('availableProjects') private availableProjects: ProjectsMetadata;

  @Prop({default: 'main'}) private mode: string;

  private onSelect(selectedRoute: string, routePaths: string) {
    if (selectedRoute === 'back') {
      this.goBack();
    } else {
      const route = routePaths[0];

      if (route === 'about') {
        this.$router.push({name: selectedRoute});
      } else if (route === 'projects') {
        const project = _.find(this.availableProjects, ['id', selectedRoute]) as ProjectMetadata;
        this.$router.push({name: routePaths[0], params: {id: selectedRoute}});
      }
    }
  }

  private goBack() {
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.main-toolbar__menu {
  display: flex;
  justify-content: flex-end;

  .main-toolbar-back__menu-item {
    width: 100%;
  }
}
</style>
