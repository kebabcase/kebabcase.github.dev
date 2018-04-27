import Vue from 'vue';
import imageFilter from './components/image-filter/image-filter.vue';

const v = new Vue({
    el: '#app',
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <image-filter :name="name" :initialEnthusiasm="5"/>
    </div>`,
    data: {
        name: 'World',
    },
    components: {
      imageFilter,
    },
});
