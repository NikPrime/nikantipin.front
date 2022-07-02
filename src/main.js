import { createApp } from 'vue';
import App from './components/App';

import router from './router/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies'
import { store } from '@/store';
import CKEditor from '@ckeditor/ckeditor5-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

axios.defaults.withCredentials = true;

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueAxios, axios)
    .use(VueCookies)
    .use(store)
    .use(CKEditor)
    .mount('#app')
