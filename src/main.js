import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import VueResource from 'vue-resource';
import vuelidate from 'vuelidate';
import store from './store/store';

import { MdCard} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import Button from './components/UI/button.vue';
Vue.component('app-button', Button);

/* MATERIAL */
Vue.use(MdCard);


/* RESOURCE */
Vue.use(VueResource)
Vue.http.options.root = '';

/* MISC */
Vue.use(vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
