import VueRouter, {RouteConfig} from 'vue-router';
import App from './app.vue';
import Main from './components/main/main.vue';
import About from './components/about/about.vue';
import ProjectDocumentations from './components/project-documentations/project-documentations.vue';
import ImageFilter from './components/image-filter/image-filter.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        name: 'main',
        component: Main,
      },
    ],
  },
  {
    path: '/about',
    component: App,
    children: [
      {
        path: '',
        name: 'about',
        component: About,
      },
    ],
  },
  {
    path: '/projects',
    component: App,
    children: [
      {
        path: ':id',
        name: 'projects',
        component: ProjectDocumentations,
      },
      {
        path: 'demo',
        name: 'projects/demo',
        children: [
          {
            path: 'image-filter',
            name: 'projects/imageFilter',
            component: ImageFilter,
          },
          {
            path: 'tile-tap',
            name: 'projects/tileTap',
            component: {
              template: '<div>Tile Tap</div>',
            },
          },
          {
            path: 'k-app',
            name: 'projects/kApp',
            component: {
              template: '<div>Kapp</div>',
            },
          },
          {
            path: 'ace-it',
            name: 'projects/aceIt',
            component: {
              template: '<div>ACEit!</div>',
            },
          },
        ],
      },
    ],
  },
];

export default new VueRouter({routes});
