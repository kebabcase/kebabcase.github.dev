import * as _ from 'lodash';
import {StoreOptions} from 'vuex';
import {ImageFilterState} from './image-filter.store.d';
import {isImage} from './util/util';

const store: StoreOptions<ImageFilterState> = {
  state: {
    images: [],
  },
  mutations: {
    addImage(state: ImageFilterState, file: File) {
      if (isImage(file)) {
        const exists = _.find(state.images, {name: file.name});
        if (!exists) {
          state.images.push(file);
        }
      }
    },
    selectImage(state: ImageFilterState, image: File) {
      state.selectedImage = image;
    },
  },
  getters: {
    selectedImage(state: ImageFilterState): File | undefined {
      return state.selectedImage;
    },
    availableImages(state: ImageFilterState): File[] {
      return state.images;
    },
  },
  strict: true,
};

export default store;
