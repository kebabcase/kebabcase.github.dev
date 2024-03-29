import {Filters} from '../image-filter/image-editor/filters/filters';

export interface ImageFilterState {
  isNavigatorOpen: boolean;
  images: File[];
  selectedImage?: File;
  filters: {[key: string]: Filters};
}
