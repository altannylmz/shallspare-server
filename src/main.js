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
import FontAwesomeIcon from './plugins/font-awesome';

// Make BootstrapVue available throughout your project
app.use(BootstrapVue3);
app.use(notify);
app.use(db);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
