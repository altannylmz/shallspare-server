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
import {faPhone} from '@fortawesome/free-solid-svg-icons';
library.add(faPhone);
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
