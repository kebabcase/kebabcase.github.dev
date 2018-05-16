<template>
  <router-view/>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import store from './store';

@Component({
  store,
})
export default class App extends Vue {
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}
</style>
