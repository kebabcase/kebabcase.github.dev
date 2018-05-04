<template>
  <div class="container">
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <el-button @click="decrement">-</el-button>
    <el-button @click="increment">+</el-button>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class ImageFilterDecorator extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;

  enthusiasm = this.initialEnthusiasm;

  increment() {
    this.enthusiasm++;
  }

  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!');
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
