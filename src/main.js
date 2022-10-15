import { createApp } from 'vue';
import MainApp from './MainApp.vue';
import router from './router.js';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/assets/css/generalstyle.css";

createApp(MainApp).use(router).mount('#app');
