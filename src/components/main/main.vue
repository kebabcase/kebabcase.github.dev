<template>
  <div class="main-container">
    <div class="background-image"></div>
    <main-toolbar/>
    <el-row class="main__row">
      <el-col :span="24">
        <main-projects/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import mainToolbar from '../toolbar/toolbar.vue';
import mainProjects from './projects/projects.vue';

@Component({
  components: {
    mainToolbar,
    mainProjects,
  },
})
export default class Main extends Vue {
  private mounted() {
    this.$message({
      message: 'Website under construction. More content will be added soon :)',
      type: 'warning',
      duration: 5000,
    });
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;

  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff url('../static/background-image.jpg') no-repeat center;
    background-size: cover;
    z-index: -1;
  }

  .main__row {
    // TODO: add margin bottom 500px when more content is added
    margin: 40px 0 0;
  }
}
</style>
