import './assets/main.css'

import { createApp } from 'vue'
import Tres from '@tresjs/core'
import App from './App.vue'
import router from "@/router";


createApp(App)
    .use(Tres)
    .use(router)
    .mount('#app')
