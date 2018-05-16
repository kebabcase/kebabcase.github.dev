<template>
  <el-menu
    class="main-toolbar__menu"
    mode="horizontal"
    @select="onSelect">
    <el-menu-item index="about">About</el-menu-item>
    <el-submenu index="projects">
      <template slot="title">Projects</template>
      <el-menu-item
        v-for="project in availableProjects"
        :key="project.id"
        :index="project.path">
        {{project.label}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {Getter, namespace} from 'vuex-class';
import {Projects} from '../projects/projects.d';

const MainGetter = namespace('main', Getter);

@Component
export default class MainToolbar extends Vue {
  @MainGetter('availableProjects') private availableProjects: Projects;

  private onSelect(selectedIndex: string) {
    console.log('Navigate to: ', selectedIndex)
    this.$router.push({name: selectedIndex});
  }
}
</script>

<style lang="scss" scoped>
.main-toolbar__menu {
  display: flex;
  justify-content: flex-end;
}
</style>
