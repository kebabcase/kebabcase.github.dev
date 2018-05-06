import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import imageFilterStore from '../image-filter/image-filter.store';

const appStore = {
  modules: {
    imageFilter: {
      namespaced: true,
      ...imageFilterStore,
    },
  },
  strict: true,
};

Vue.use(Vuex);
export default new Vuex.Store(appStore);
