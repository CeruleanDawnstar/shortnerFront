import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store";
import { FontAwesomeIcon } from './assets/font-awesome';
import VueQrcode from '@chenfengyuan/vue-qrcode';

createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component(VueQrcode.name, VueQrcode)
    .mount('#app')