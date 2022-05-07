import {createApp} from 'vue';
import App from './App.vue';

import {createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

import BootstrapVue3 from 'bootstrap-vue-3';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
const app = createApp(App);
import '../src/assets/scss/main.scss';

import notify from './plugins/notify';
import db from './plugins/db';
import config from './plugins/config';
import init from './plugins/init';
import socket from './plugins/socket/init';
import FontAwesomeIcon from './plugins/font-awesome';
import store from './store/store';

// Make BootstrapVue available throughout your project
app.use(store);
app.use(init);
app.use(BootstrapVue3);
app.use(notify);
app.use(db.use);
app.use(socket);
app.use(config.use);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
