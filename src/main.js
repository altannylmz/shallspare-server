import {createApp} from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../src/assets/scss/main.scss';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowDown, faPen, faPlay, faStop, faCircleMinus} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowDown, faPen, faPlay, faStop, faCircleMinus);
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import notify from './plugins/notify';
app.use(notify);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
