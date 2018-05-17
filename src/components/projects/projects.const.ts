import {Projects} from './projects.d';

export const PROJECTS: Projects = [
  {
    id: 'imageFilter',
    label: 'Image Filter',
    name: 'projects/imageFilter',
    path: 'projects/image-filter',
  },
  {
    id: 'tileTap',
    label: 'TileTap',
    name: 'projects/tileTap',
    path: 'projects/tile-tap',
  },
  {
    id: 'kApp',
    label: 'Kapp',
    name: 'projects/kApp',
    path: 'projects/k-app',
    assets: {
      featureImage: {
        path: './static/feature-image.png',
      },
    },
  },
  {
    id: 'aceIt',
    label: 'ACEit!',
    name: 'projects/aceIt',
    path: 'projects/ace-it',
  },
];
