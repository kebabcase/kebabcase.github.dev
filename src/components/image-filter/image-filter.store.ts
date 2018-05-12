import * as _ from 'lodash';
import {StoreOptions} from 'vuex';
import {ImageFilterState} from './image-filter.store.d';
import {Filters} from '../image-filter/image-editor/filters/filters';
import {isImage} from './util/util';

const store: StoreOptions<ImageFilterState> = {
  state: {
    images: [],
    filters: {},
  },
  mutations: {
    addImage(state: ImageFilterState, file: File) {
      if (isImage(file)) {
        const exists = _.find(state.images, {name: file.name});

        // TODO: add UI indicator for duplicate image in the list
        if (!exists) {
          state.images.push(file);
        }
      }
    },
    selectImage(state: ImageFilterState, image: File) {
      state.selectedImage = image;
    },
    updateFilter(state: ImageFilterState, payload: {filterType: string, filterValue: number, imageName: string}) {
      if (!state.filters[payload.imageName]) {
        state.filters[payload.imageName] = new Filters();
      }

      state.filters[payload.imageName].setValue(payload.filterType, payload.filterValue);
    },
  },
  getters: {
    selectedImage(state: ImageFilterState): File | undefined {
      return state.selectedImage;
    },
    availableImages(state: ImageFilterState): File[] {
      return state.images;
    },
    filters(state: ImageFilterState): {[key: string]: Filters} {
      return state.filters;
    },
  },
  strict: true,
};

export default store;