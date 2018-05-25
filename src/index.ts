import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import {
    Button,
    Input,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Row,
    Col,
    Card,
    Tabs,
    TabPane,
    Slider,
} from 'element-ui';

Vue.use(VueRouter);

// Element UI
Vue.use(Button);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Slider);

const vm = new Vue({
    router,
}).$mount('#app');
