import './assets/main.css'

import { createApp } from 'vue';
import Tres from '@tresjs/core';
import router from "@/router";
import App from './App.vue';


createApp(App)
    .use(Tres)
    .use(router)
    .mount('#app')
