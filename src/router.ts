import VueRouter, {RouteConfig} from 'vue-router';
import App from './app.vue';
import Main from './components/main/main.vue';
import KApp from './components/projects/k-app/k-app.vue';
import ImageFilter from './components/image-filter/image-filter.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
      {
        path: '',
        name: 'main',
        component: Main,
      },
      {
        path: 'about',
        name: 'about',
        component: {
          template: '<div>About Page</div>',
        },
      },
    ],
  },
  {
    path: '/projects',
    name: 'projects',
    component: App,
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
        component: KApp,
      },
      {
        path: 'ace-it',
        name: 'projects/aceIt',
        component: {
          template: '<div>ACEit!</div>',
        },
      }
    ],
  },
];

export default new VueRouter({routes});
