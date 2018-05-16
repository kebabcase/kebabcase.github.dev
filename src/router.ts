import VueRouter, {RouteConfig} from 'vue-router';
import App from './app.vue';
import Main from './components/main/main.vue';
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
      // TODO: break up `projects/` routes into their own routes
      {
        path: 'projects/image-filter',
        name: 'projects/imageFilter',
        component: ImageFilter,
      },
      {
        path: 'projects/tile-tap',
        name: 'projects/tileTap',
        component: {
          template: '<div>Tile Tap</div>',
        },
      },
      {
        path: 'projects/k-app',
        name: 'projects/kApp',
        component: {
          template: '<div>Kapp</div>',
        },
      },
      {
        path: 'projects/ace-it',
        name: 'projects/aceIt',
        component: {
          template: '<div>ACEit!</div>',
        },
      },
    ],
  },
];

export default new VueRouter({routes});
