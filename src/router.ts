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
    ],
  },
  {
    path: '/demo',
    component: App,
    children: [
      {
        path: 'image-filter',
        name: 'projects/imageFilter',
        component: ImageFilter,
      },
    ],
  },
];

export default new VueRouter({routes});
