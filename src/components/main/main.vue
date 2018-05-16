<template>
  <div>
      <main-toolbar/>
      <el-row>
        <el-col :span="24">
          <main-projects/>
        </el-col>
      </el-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import mainToolbar from './toolbar/toolbar.vue';
import mainProjects from './projects/projects.vue';

@Component({
  components: {
    mainToolbar,
    mainProjects,
  },
})
export default class Main extends Vue {
}
</script>
