import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies'
import { store } from "@/store";
import CKEditor from '@ckeditor/ckeditor5-vue';

axios.defaults.withCredentials = true;

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueCookies)
    .use(store)
    .use(CKEditor)
    .mount('#app')
