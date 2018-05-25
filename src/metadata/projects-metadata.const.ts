import {ProjectsMetadata} from './projects-metadata.d';

export const PROJECTS_METADATA: ProjectsMetadata = [
  // {
  //   id: 'imageFilter',
  //   label: 'Image Filter',
  //   name: 'projects/imageFilter',
  //   path: 'projects/image-filter',
  //   assets: {
  //     featureImage: {
  //       // TODO: add feature image to image-filter and modify path below
  //       path: './static/k-app-feature-image.png',
  //     },
  //   },
  // },
  {
    id: 'tileTap',
    label: 'TileTap',
    name: 'projects/tileTap',
    path: 'projects/tile-tap',
    assets: {
      featureImage: {
        path: './static/tile-tap-feature-image.png',
      },
    },
  },
  {
    id: 'kApp',
    label: 'Kapp',
    name: 'projects/kApp',
    path: 'projects/k-app',
    assets: {
      featureImage: {
        path: './static/k-app-feature-image.png',
      },
    },
  },
  {
    id: 'aceIt',
    label: 'ACEit!',
    name: 'projects/aceIt',
    path: 'projects/ace-it',
    assets: {
      featureImage: {
        path: './static/ace-it-feature-image.png',
      },
    },
  },
];
