import Vue from 'vue';
import {Button, Input} from 'element-ui';
import app from './components/main/app.vue';

Vue.use(Button);
Vue.use(Input);

const vm = new Vue({
    el: '#app',
    render: h => h(app),
});
