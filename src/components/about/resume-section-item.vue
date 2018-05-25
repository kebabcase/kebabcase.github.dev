<template>
  <div class="resume-section-item-container">
    <div
      v-for="item in content"
      :key="item.id">
      <div v-if="item.content">
        <i>{{item.title}}</i>
        <resume-section-item
          v-if="item.content"
          :content="item.content"/>
      </div>
      <ul
        class="item-body"
        v-else>
        <span class="item-body-title">
          {{item.title}}
        </span>
        <li
          v-for="body in item.body"
          :key="body">
          {{body}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {ResumeContent} from './resume.d';

@Component
export default class ResumeSectionItem extends Vue {
  @Prop() private content: ResumeContent[];

  private beforeCreate() {
    this.$options.components!.TreeFolderContents = require('./resume-section-item.vue');
  }
}
</script>

<style lang="scss" scoped>
.resume-section-item-container {
  .item-body {
    .item-body-title {
      font-size: 14px;
      font-weight: bold;
      line-height: 30px;
    }

    li {
      margin: 0 30px;
    }
  }
}
</style>
