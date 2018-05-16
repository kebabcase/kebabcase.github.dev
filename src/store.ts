import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import mainStore from './components/main/main.store';
import imageFilterStore from './components/image-filter/image-filter.store';

Vue.use(Vuex);

const appStore = {
  modules: {
    main: mainStore,
    imageFilter: imageFilterStore,
  },
  strict: true,
};

export default new Vuex.Store(appStore);
