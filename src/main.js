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

import notify from './plugins/notify';
import FontAwesomeIcon from './plugins/font-awesome';

app.use(notify);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
