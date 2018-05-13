import Vue from 'vue';
import {
    Button,
    Input,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    MenuItem,
    Row,
    Col,
    Card,
    Tabs,
    TabPane,
    Slider,
} from 'element-ui';
import app from './components/main/app.vue';

Vue.use(Button);
Vue.use(Input);

// Image Filter
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

// Image Editor
// Image Navigator
Vue.use(Menu);
Vue.use(MenuItem);

// Image Viewer
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

// Slider Editor
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Slider);

const vm = new Vue({
    el: '#app',
    render: h => h(app),
});
