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
import FontAwesomeIcon from './plugins/font-awesome';
import store from './store/store';

// Make BootstrapVue available throughout your project
app.use(BootstrapVue3);
app.use(notify);
app.use(db);
app.use(config);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
