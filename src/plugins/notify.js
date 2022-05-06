
import Notiflix from 'notiflix';
export default {
	install(app) {
		app.config.globalProperties.$notify = Notiflix.Notify;
	},
};
