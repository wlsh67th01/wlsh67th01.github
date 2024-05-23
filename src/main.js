import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import navbar from "./share/Navbar.vue";
import VueFeather from "vue-feather";

/*
createApp(App)
    .use(router)
    .mount('#app')*/

createApp(App)
    .use(router, VueFeather)
    .component("navbar", navbar)
    .component(VueFeather.name, VueFeather)
    .mount("#app");



